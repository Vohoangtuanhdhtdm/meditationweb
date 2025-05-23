import { Role } from "@/components/module/auth/Role";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/Assign_role")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Role />
    </div>
  );
}
