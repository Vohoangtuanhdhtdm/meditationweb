import About from "@/components/module/About/About";
import { createLazyFileRoute } from "@tanstack/react-router";
export const Route = createLazyFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return <About />;
}
