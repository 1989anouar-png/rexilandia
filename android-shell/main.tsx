import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RexApp } from "@/components/rex-app";
import "@/styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("Falta el contenedor de Rexilandia");

createRoot(root).render(
  <StrictMode>
    <RexApp />
  </StrictMode>,
);
