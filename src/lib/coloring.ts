export const PAGE_W = 600;
export const PAGE_H = 800;

export function preparePage(img: HTMLImageElement): {
  lines: HTMLCanvasElement;
  wall: Uint8Array;
} {
  const lines = document.createElement("canvas");
  lines.width = PAGE_W;
  lines.height = PAGE_H;
  const ctx = lines.getContext("2d", { willReadFrequently: true });
  if (!ctx) throw new Error("canvas");

  const scale = Math.min(PAGE_W / img.naturalWidth, PAGE_H / img.naturalHeight);
  const dw = Math.round(img.naturalWidth * scale);
  const dh = Math.round(img.naturalHeight * scale);
  const ox = Math.round((PAGE_W - dw) / 2);
  const oy = Math.round((PAGE_H - dh) / 2);
  ctx.drawImage(img, ox, oy, dw, dh);

  const image = ctx.getImageData(0, 0, PAGE_W, PAGE_H);
  const d = image.data;
  const wall = new Uint8Array(PAGE_W * PAGE_H);
  for (let i = 0; i < wall.length; i++) {
    const p = i * 4;
    const r = d[p] ?? 0;
    const g = d[p + 1] ?? 0;
    const b = d[p + 2] ?? 0;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;
    const isPaper = max > 206 && sat < 0.25;
    const isLine = max < 150 || (max < 196 && sat < 0.28);
    if (!isPaper && isLine) {
      wall[i] = 1;
      d[p] = 36;
      d[p + 1] = 49;
      d[p + 2] = 40;
      d[p + 3] = 255;
    } else {
      d[p] = 0;
      d[p + 1] = 0;
      d[p + 2] = 0;
      d[p + 3] = 0;
    }
  }
  ctx.putImageData(image, 0, 0);
  return { lines, wall: dilate(wall, PAGE_W, PAGE_H) };
}

function dilate(wall: Uint8Array, w: number, h: number) {
  const next = wall.slice();
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const i = y * w + x;
      if (wall[i]) continue;
      if (wall[i - 1] || wall[i + 1] || wall[i - w] || wall[i + w]) next[i] = 1;
    }
  }
  return next;
}

export function floodFill(
  paint: ImageData,
  wall: Uint8Array,
  sx: number,
  sy: number,
  rgba: [number, number, number, number],
) {
  const w = paint.width;
  const h = paint.height;
  const d = paint.data;
  if (sx < 0 || sy < 0 || sx >= w || sy >= h) return;
  const start = sy * w + sx;
  if (wall[start]) return;
  const p0 = start * 4;
  const tr = d[p0] ?? 0;
  const tg = d[p0 + 1] ?? 0;
  const tb = d[p0 + 2] ?? 0;
  const ta = d[p0 + 3] ?? 0;
  if (tr === rgba[0] && tg === rgba[1] && tb === rgba[2] && ta === rgba[3]) return;

  const same = (i: number) => {
    if (wall[i]) return false;
    const p = i * 4;
    return d[p] === tr && d[p + 1] === tg && d[p + 2] === tb && d[p + 3] === ta;
  };

  const stack: number[] = [sx, sy];
  while (stack.length) {
    const y = stack.pop()!;
    let x = stack.pop()!;
    let i = y * w + x;
    while (x > 0 && same(i - 1)) {
      x--;
      i--;
    }
    let spanUp = false;
    let spanDown = false;
    for (; x < w && same(i); x++, i++) {
      const p = i * 4;
      d[p] = rgba[0];
      d[p + 1] = rgba[1];
      d[p + 2] = rgba[2];
      d[p + 3] = rgba[3];
      if (y > 0) {
        const up = i - w;
        if (!spanUp && same(up)) {
          stack.push(x, y - 1);
          spanUp = true;
        } else if (spanUp && !same(up)) spanUp = false;
      }
      if (y < h - 1) {
        const down = i + w;
        if (!spanDown && same(down)) {
          stack.push(x, y + 1);
          spanDown = true;
        } else if (spanDown && !same(down)) spanDown = false;
      }
    }
  }
}

export function hasInk(paint: HTMLCanvasElement) {
  const ctx = paint.getContext("2d");
  if (!ctx) return false;
  const { data } = ctx.getImageData(0, 0, paint.width, paint.height);
  for (let i = 3; i < data.length; i += 40) {
    if ((data[i] ?? 0) > 24) return true;
  }
  return false;
}

export function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(src));
    img.src = src;
  });
}

export function hexToRgba(hex: string): [number, number, number, number] {
  const n = hex.replace("#", "");
  return [
    Number.parseInt(n.slice(0, 2), 16),
    Number.parseInt(n.slice(2, 4), 16),
    Number.parseInt(n.slice(4, 6), 16),
    255,
  ];
}
