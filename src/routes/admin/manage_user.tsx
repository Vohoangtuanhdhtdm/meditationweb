import { Manage_User } from "@/components/module/Admin/Manage_User";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/manage_user")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Manage_User />
    </div>
  );
}
