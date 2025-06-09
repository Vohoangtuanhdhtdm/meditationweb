import CreateContent from "@/components/module/Admin/CreateContent";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/create_content")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <CreateContent />
    </div>
  );
}
