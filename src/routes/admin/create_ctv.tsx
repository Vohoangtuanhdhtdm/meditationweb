import ManageEmployees from "@/components/module/Admin/ManageEmployees";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/create_ctv")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ManageEmployees />
    </div>
  );
}
