import PlanPageComponent from "@/components/module/Plan/PlanPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/plan/PlanPage")({
  component: PlanPage,
});

export default function PlanPage() {
  return <PlanPageComponent />;
}
