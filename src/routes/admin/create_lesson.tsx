import { CreateLesson } from "@/components/module/Admin/CreateLesson";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/create_lesson")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <CreateLesson />
    </div>
  );
}
