import CallbackPage from "@/components/module/auth/CallbackPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/callback")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <CallbackPage />
    </div>
  );
}
