import { createFileRoute } from '@tanstack/react-router'
import MeditatePage from "@/Content/MeditatePage";

export const Route = createFileRoute("/meditate")({
  component: Index,
});

function Index() {
  return (
    <div>
      <MeditatePage />
    </div>
  );
}