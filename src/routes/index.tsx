import { createFileRoute } from "@tanstack/react-router";
import { RexApp } from "@/components/rex-app";

export const Route = createFileRoute("/")({
  component: RexApp,
});
