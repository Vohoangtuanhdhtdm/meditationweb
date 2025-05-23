import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import toast from "react-hot-toast";
import {
  CourseDto,
  PhaseCourseDto,
  ContentCourseDto,
  LessonCourseDto,
} from "@/types/course.type";
import { Button } from "@/components/ui/button";

type CourseDetailProps = {
  paramsCourseId: string;
};

export default function CourseDetail(CourseDetailProps: CourseDetailProps) {
  const navigate = useNavigate();
  const courseId = CourseDetailProps.paramsCourseId;

  const [course, setCourse] = useState<CourseDto | null>(null);
  const [phases, setPhases] = useState<PhaseCourseDto[]>([]);
  const [contents, setContents] = useState<ContentCourseDto[]>([]);
  const [lessons, setLessons] = useState<LessonCourseDto[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const courseRes = await api.get(`/Course/${courseId}`);
        // const phaseRes = await api.get(`/PhaseCourse/${courseId}`);
        // const contentRes = await api.get(`/ContentCourse/${courseId}`);
        // const lessonRes = await api.get(`/LessonCourse/${courseId}`);

        setCourse(courseRes.data);
        // setPhases(phaseRes.data);
        // setContents(contentRes.data);
        // setLessons(lessonRes.data);
      } catch (error) {
        toast.error(`Không thể tải chi tiết khóa học: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [courseId]);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Chi tiết khóa học</h1>
      <Separator />
      {loading ? (
        <p>Đang tải...</p>
      ) : course ? (
        <>
          <Card>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-gray-700">{course.description}</p>
              <p className="font-semibold">Giá: {course.price} VND</p>
            </CardContent>
          </Card>

          {phases?.map((phase) => (
            <Card key={phase.id} className="mt-4">
              <CardHeader>
                <CardTitle>Giai đoạn: {phase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {contents
                  .filter((c) => c.phaseCourseId === phase.id)
                  .map((content) => (
                    <div key={content.id} className="mb-4 pl-4 border-l-2">
                      <h3 className="text-lg font-semibold">
                        Nội dung: {content.title}
                      </h3>
                      <p className="text-gray-600">{content.description}</p>

                      {lessons
                        .filter((l) => l.contentCourseId === content.id)
                        .map((lesson) => (
                          <div
                            key={lesson.id}
                            className="ml-4 mt-2 border-l pl-4 text-sm"
                          >
                            <p>
                              <strong>Bài học:</strong> {lesson.title}
                            </p>
                            <p>
                              <strong>Video:</strong>{" "}
                              <a
                                href={lesson.videoUrl}
                                className="text-blue-600 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Xem video
                              </a>
                            </p>
                            <p>
                              <strong>Thời lượng:</strong> {lesson.duration}{" "}
                              phút
                            </p>
                          </div>
                        ))}
                    </div>
                  ))}
              </CardContent>
            </Card>
          ))}
        </>
      ) : (
        <p>Không tìm thấy khóa học.</p>
      )}

      <div className="pt-6">
        <Button variant="outline" onClick={() => navigate({ to: "/course" })}>
          Quay lại danh sách
        </Button>
      </div>
    </div>
  );
}
