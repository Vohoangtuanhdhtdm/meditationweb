import CreateCourse from "@/components/module/Admin/CreateCourse";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/create_course")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <CreateCourse />
    </div>
  );
}
