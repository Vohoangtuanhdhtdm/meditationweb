import CourseDetail from "@/components/module/Course/CourseDetail";
import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/course/$courseId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { courseId } = useParams({ from: "/course/$courseId" });
  return (
    <div>
      <CourseDetail paramsCourseId={courseId} />
    </div>
  );
}
