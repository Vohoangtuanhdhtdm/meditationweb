import Register from "@/components/module/auth/Register";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Register />
    </div>
  );
}
