import Login from "@/components/module/auth/Login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Login />
    </div>
  );
}
