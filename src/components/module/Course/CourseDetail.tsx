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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";
import ReactPlayer from "react-player";

type CourseDetailProps = {
  paramsCourseId: string;
};

export default function CourseDetail({ paramsCourseId }: CourseDetailProps) {
  const navigate = useNavigate();
  const courseId = paramsCourseId;

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
        setCourse(courseRes.data);

        const phaseRes = await api.get(`/PhaseCourse/by-course-id/${courseId}`);
        const phaseList = phaseRes.data;
        setPhases(phaseList);

        const contentResults = await Promise.all(
          phaseList.map((phase: PhaseCourseDto) =>
            api.get(`/ContentCourse/by-phase-id/${phase.id}`)
          )
        );
        const allContents = contentResults.flatMap((res) => res.data);
        setContents(allContents);

        const lessonResults = await Promise.all(
          allContents.map((content: ContentCourseDto) =>
            api.get(`/LessonCourse/by-content-id/${content.id}`)
          )
        );
        const allLessons = lessonResults.flatMap((res) => res.data);
        setLessons(allLessons);
      } catch (error: any) {
        toast.error(
          `Không thể tải chi tiết khóa học: ${error.message || error}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [courseId]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Chi tiết khóa học</h1>
      <Separator />

      {loading ? (
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-10 w-2/3" />
        </div>
      ) : course ? (
        <>
          <Card className="border border-muted rounded-xl shadow-sm hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-2xl">{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p>{course.description}</p>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Giá:</span>{" "}
                {course.price.toLocaleString()} VND
              </div>
            </CardContent>
          </Card>

          <Accordion type="multiple" className="mt-6">
            {phases.map((phase) => (
              <AccordionItem key={phase.id} value={phase.id}>
                <AccordionTrigger className="text-lg font-semibold text-primary">
                  Giai đoạn: {phase.title}
                </AccordionTrigger>
                <AccordionContent>
                  {contents
                    .filter((c) => c.phaseCourseId === phase.id)
                    .map((content) => (
                      <div key={content.id} className="mb-4 ml-2">
                        <h3 className="text-base font-medium text-primary">
                          {content.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {content.description}
                        </p>
                        <div className="mt-2 ml-4 space-y-8">
                          {lessons
                            .filter((l) => l.contentCourseId === content.id)
                            .map((lesson) => (
                              <div
                                key={lesson.id}
                                className="rounded-xl bg-white dark:bg-muted border shadow-md overflow-hidden"
                              >
                                <div className="relative w-full aspect-video bg-muted/30">
                                  <ReactPlayer
                                    url={lesson.videoUrl}
                                    width="100%"
                                    height="100%"
                                    controls
                                    className="absolute top-0 left-0"
                                  />
                                </div>

                                <div className="p-4 space-y-2">
                                  <h4 className="text-lg font-semibold">
                                    {lesson.title}
                                  </h4>

                                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                                    <p>
                                      <span className="font-medium">
                                        ⏱ Thời lượng:
                                      </span>{" "}
                                      {lesson.duration} phút
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      ) : (
        <p className="text-destructive">Không tìm thấy khóa học.</p>
      )}

      <div className="pt-6">
        <Button
          variant="outline"
          onClick={() => navigate({ to: "/course" })}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Quay lại danh sách
        </Button>
      </div>
    </div>
  );
}
