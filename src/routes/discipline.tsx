import { createFileRoute } from "@tanstack/react-router";
import DisciplinePage from "@/Content/DisciplinePage";

export const Route = createFileRoute("/discipline")({
  component: DisciplinePage,
});