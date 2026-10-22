import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  Download,
  Eraser,
  Lightbulb,
  PaintBucket,
  Paintbrush,
  Trash2,
  Undo2,
} from "lucide-react";
import { CRAYONS, pagesFor, type ColorBook } from "@/data/catalog";
import { audio } from "@/lib/audio";
import {
  PAGE_H,
  PAGE_W,
  floodFill,
  hasInk,
  hexToRgba,
  loadImage,
  preparePage,
} from "@/lib/coloring";
import { useProgress } from "@/lib/progress";

type Tool = "brush" | "fill" | "erase";

export function ColorStudio() {
  const markColored = useProgress((s) => s.markColored);
  const savePainting = useProgress((s) => s.savePainting);
  const [book, setBook] = useState<ColorBook>("dinos");
  const [pageId, setPageId] = useState("espinin");
  const [tool, setTool] = useState<Tool>("brush");
  const [crayonId, setCrayonId] = useState<(typeof CRAYONS)[number]["id"]>("chicle");
  const [size, setSize] = useState(30);
  const [undoCount, setUndoCount] = useState(0);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [confirmClear, setConfirmClear] = useState(false);
  const [ideaOpen, setIdeaOpen] = useState(false);
  const viewRef = useRef<HTMLCanvasElement>(null);
  const paintRef = useRef<HTMLCanvasElement | null>(null);
  const linesRef = useRef<HTMLCanvasElement | null>(null);
  const photoRef = useRef<HTMLCanvasElement | null>(null);
  const modeRef = useRef<"line" | "foto">("line");
  const wallRef = useRef<Uint8Array | null>(null);
  const undoRef = useRef<ImageData[]>([]);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const usedRef = useRef<Set<string>>(new Set());
  const pageIdRef = useRef(pageId);
  const statusRef = useRef(status);
  pageIdRef.current = pageId;
  statusRef.current = status;

  const pages = pagesFor(book);
  const page = pages.find((item) => item.id === pageId) ?? pages[0];
  const crayon = CRAYONS.find((item) => item.id === crayonId) ?? CRAYONS[0];

  function render() {
    const view = viewRef.current;
    const paint = paintRef.current;
    if (!view || !paint) return;
    const ctx = view.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = "#fffdf6";
    ctx.fillRect(0, 0, PAGE_W, PAGE_H);
    if (modeRef.current === "foto" && photoRef.current) {
      ctx.drawImage(photoRef.current, 0, 0);
      ctx.save();
      ctx.globalAlpha = 1;
      ctx.drawImage(paint, 0, 0);
      ctx.restore();
      return;
    }
    ctx.drawImage(paint, 0, 0);
    if (linesRef.current) ctx.drawImage(linesRef.current, 0, 0);
  }

  function commit() {
    const paint = paintRef.current;
    if (!paint || statusRef.current !== "ready") return;
    const id = pageIdRef.current;
    try {
      savePainting(id, paint.toDataURL("image/png"));
    } catch {
      /* keep the drawing on screen even if storage is full */
    }
    if (hasInk(paint)) markColored(id, [...usedRef.current]);
  }

  useEffect(() => {
    let cancel = false;
    const id = pageId;
    const spec = pagesFor(book).find((item) => item.id === id);
    if (!spec) return;
    setStatus("loading");
    void (async () => {
      try {
        const paint = document.createElement("canvas");
        paint.width = PAGE_W;
        paint.height = PAGE_H;
        const saved = useProgress.getState().paintings[id];
        if (saved) {
          try {
            const previous = await loadImage(saved);
            if (cancel) return;
            paint.getContext("2d")?.drawImage(previous, 0, 0, PAGE_W, PAGE_H);
          } catch {
            /* start fresh if a save cannot be read */
          }
        }
        if (cancel) return;
        if (spec.photo && !spec.line) {
          const img = await loadImage(spec.photo);
          if (cancel) return;
          const photo = document.createElement("canvas");
          photo.width = PAGE_W;
          photo.height = PAGE_H;
          const pctx = photo.getContext("2d");
          if (!pctx) throw new Error("canvas");
          pctx.fillStyle = "#fffdf6";
          pctx.fillRect(0, 0, PAGE_W, PAGE_H);
          const scale = Math.min(PAGE_W / img.naturalWidth, PAGE_H / img.naturalHeight);
          const dw = img.naturalWidth * scale;
          const dh = img.naturalHeight * scale;
          pctx.drawImage(img, (PAGE_W - dw) / 2, (PAGE_H - dh) / 2, dw, dh);
          photoRef.current = photo;
          linesRef.current = null;
          wallRef.current = null;
          modeRef.current = "foto";
        } else if (spec.line) {
          const img = await loadImage(spec.line);
          if (cancel) return;
          const prepared = preparePage(img);
          photoRef.current = null;
          linesRef.current = prepared.lines;
          wallRef.current = prepared.wall;
          modeRef.current = "line";
        } else {
          throw new Error("empty page");
        }
        paintRef.current = paint;
        usedRef.current = new Set(useProgress.getState().pageColors[id] ?? []);
        undoRef.current = [];
        setUndoCount(0);
        setStatus("ready");
        render();
      } catch {
        if (!cancel) setStatus("error");
      }
    })();
    return () => {
      cancel = true;
    };
  }, [pageId, book]);

  useEffect(() => {
    return () => commit();
  }, []);

  function pushUndo() {
    const paint = paintRef.current;
    const ctx = paint?.getContext("2d");
    if (!paint || !ctx) return;
    undoRef.current.push(ctx.getImageData(0, 0, paint.width, paint.height));
    if (undoRef.current.length > 8) undoRef.current.shift();
    setUndoCount(undoRef.current.length);
  }

  function point(event: PointerEvent<HTMLCanvasElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    return {
      x: ((event.clientX - rect.left) / rect.width) * PAGE_W,
      y: ((event.clientY - rect.top) / rect.height) * PAGE_H,
    };
  }

  function dab(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  function stroke(ctx: CanvasRenderingContext2D, from: { x: number; y: number }, to: { x: number; y: number }) {
    const dist = Math.hypot(to.x - from.x, to.y - from.y);
    const steps = Math.max(1, Math.ceil(dist / Math.max(1, size * 0.25)));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      dab(ctx, from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t);
    }
  }

  function onDown(event: PointerEvent<HTMLCanvasElement>) {
    if (status !== "ready") return;
    const paint = paintRef.current;
    const ctx = paint?.getContext("2d");
    const wall = wallRef.current;
    if (!paint || !ctx) return;
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    const at = point(event);
    if (tool === "fill" && wall && modeRef.current === "line") {
      pushUndo();
      const data = ctx.getImageData(0, 0, paint.width, paint.height);
      floodFill(data, wall, Math.round(at.x), Math.round(at.y), hexToRgba(crayon.hex));
      ctx.putImageData(data, 0, 0);
      usedRef.current.add(crayon.id);
      audio().sparkle();
      render();
      commit();
      return;
    }
    pushUndo();
    drawing.current = true;
    last.current = at;
    ctx.save();
    if (tool === "erase") {
      ctx.globalCompositeOperation = "destination-out";
    } else {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = crayon.hex;
      usedRef.current.add(crayon.id);
    }
    dab(ctx, at.x, at.y);
    ctx.restore();
    render();
  }

  function onMove(event: PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current || tool === "fill") return;
    const paint = paintRef.current;
    const ctx = paint?.getContext("2d");
    const prev = last.current;
    if (!ctx || !prev) return;
    const at = point(event);
    ctx.save();
    if (tool === "erase") ctx.globalCompositeOperation = "destination-out";
    else {
      ctx.fillStyle = crayon.hex;
      usedRef.current.add(crayon.id);
    }
    stroke(ctx, prev, at);
    ctx.restore();
    last.current = at;
    render();
  }

  function onUp() {
    if (!drawing.current) return;
    drawing.current = false;
    last.current = null;
    commit();
  }

  function undo() {
    const paint = paintRef.current;
    const ctx = paint?.getContext("2d");
    const snap = undoRef.current.pop();
    if (!ctx || !snap) return;
    ctx.putImageData(snap, 0, 0);
    setUndoCount(undoRef.current.length);
    audio().bonk();
    render();
    commit();
  }

  function clearPage() {
    const paint = paintRef.current;
    const ctx = paint?.getContext("2d");
    if (!ctx || !paint) return;
    pushUndo();
    ctx.clearRect(0, 0, paint.width, paint.height);
    usedRef.current.clear();
    setConfirmClear(false);
    audio().bonk();
    render();
    commit();
  }

  function download() {
    const view = viewRef.current;
    if (!view) return;
    render();
    const link = document.createElement("a");
    link.href = view.toDataURL("image/jpeg", 0.92);
    link.download = `rexilandia-${page?.id ?? "dibujo"}.jpg`;
    link.click();
    audio().fanfare();
  }

  function choosePage(id: string) {
    if (id === pageId) return;
    commit();
    setIdeaOpen(false);
    setConfirmClear(false);
    setPageId(id);
    audio().blip();
  }

  return (
    <div className="screen studio">
      <div className="chips">
        {(
          [
            ["dinos", "Dinos"],
            ["cosas", "Cosas"],
            ["lineas", "Todos"],
            ["amigos", "Fotos"],
            ["paisaje", "Selva"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className="chip"
            aria-pressed={book === id}
            onClick={() => {
              if (id === book) return;
              commit();
              setBook(id);
              const first = pagesFor(id)[0];
              if (first) setPageId(first.id);
              audio().blip();
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="filmstrip">
        {pages.map((item) => (
          <button
            key={item.id}
            type="button"
            className="thumb"
            aria-label={item.name}
            aria-current={item.id === pageId}
            onClick={() => choosePage(item.id)}
          >
            <img src={item.line ?? item.photo} alt="" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <p className="page-name">{page?.name}</p>
      <div className="paper-wrap">
        <canvas
          ref={viewRef}
          className="sheet"
          width={PAGE_W}
          height={PAGE_H}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        />
      </div>
      <div className="studio-tools">
        {status === "loading" && <p className="status-line">Preparando la lámina…</p>}
        {status === "error" && <p className="status-line">No se pudo abrir este dibujo.</p>}
        <div className="tool-row">
          <button type="button" className="tool" aria-pressed={tool === "brush"} onClick={() => setTool("brush")}>
            <Paintbrush /> Pincel
          </button>
          {page?.line && (
            <button type="button" className="tool" aria-pressed={tool === "fill"} onClick={() => setTool("fill")}>
              <PaintBucket /> Bote
            </button>
          )}
          <button type="button" className="tool" aria-pressed={tool === "erase"} onClick={() => setTool("erase")}>
            <Eraser /> Goma
          </button>
          <button type="button" className="tool" onClick={undo} disabled={undoCount === 0}>
            <Undo2 /> Deshacer
          </button>
          {page?.idea && (
            <button type="button" className="tool" onClick={() => setIdeaOpen(true)}>
              <Lightbulb /> Idea
            </button>
          )}
          <button type="button" className="tool" onClick={download}>
            <Download /> Guardar
          </button>
          {confirmClear ? (
            <>
              <button type="button" className="kid-btn" onClick={clearPage}>
                Sí, borrar
              </button>
              <button type="button" className="kid-btn alt" onClick={() => setConfirmClear(false)}>
                No
              </button>
            </>
          ) : (
            <button type="button" className="tool" onClick={() => setConfirmClear(true)}>
              <Trash2 /> Borrar
            </button>
          )}
        </div>
        <div className="size-row">
          {[16, 30, 48].map((value) => (
            <button
              key={value}
              type="button"
              className="size-dot"
              aria-label={`Grosor ${value}`}
              aria-pressed={size === value}
              onClick={() => setSize(value)}
            >
              <span style={{ width: value / 3.2, height: value / 3.2 }} />
            </button>
          ))}
        </div>
        <p className="color-name">{crayon.name}</p>
        <div className="crayon-row">
          {CRAYONS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={"glow" in item && item.glow ? "crayon glow" : "crayon"}
              style={{ background: item.hex, color: item.hex }}
              aria-label={item.name}
              aria-pressed={crayonId === item.id}
              onClick={() => {
                setCrayonId(item.id);
                if (tool === "erase") setTool("brush");
                audio().blip();
              }}
            />
          ))}
        </div>
      </div>
      {ideaOpen && page?.idea && (
        <div className="idea-pop" onClick={() => setIdeaOpen(false)}>
          <div className="idea-card" onClick={(event) => event.stopPropagation()}>
            <img src={page.idea} alt="" />
            <p>Así puede quedar {page.name}. Ahora lo pintas tú.</p>
            <button type="button" className="kid-btn" onClick={() => setIdeaOpen(false)}>
              A pintar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
