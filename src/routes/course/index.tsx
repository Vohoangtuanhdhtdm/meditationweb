import CoursesPage from "@/components/module/Course/CoursesPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/course/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <CoursesPage />
    </div>
  );
}
