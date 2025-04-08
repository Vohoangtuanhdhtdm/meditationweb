import LangingPage from "@/page/Home/LangingPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <LangingPage />
    </div>
  );
}
