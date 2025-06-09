import { CreatePhase } from "@/components/module/Admin/CreatePhase";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/create_phase")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <CreatePhase />
    </div>
  );
}
