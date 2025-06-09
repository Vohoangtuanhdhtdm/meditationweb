import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/services/api";
import { ContentCourseDto, LessonCourseDto } from "@/types/course.type";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export const CreateLesson = () => {
  const [content, setContent] = useState<ContentCourseDto[]>([]);
  const [lesson, setLesson] = useState<LessonCourseDto[]>([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<LessonCourseDto>({
    defaultValues: {
      title: "",
      videoUrl: "",
      duration: 0,
      contentCourseId: "",
    },
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await api.get("/ContentCourse");
        setContent(response.data);
        const lessonRes = await api.get("/LessonCourse");
        setLesson(lessonRes.data);
      } catch (error) {
        toast.error(`Không thể tải danh sách khóa học ${error}`);
      }
    };
    fetch();
  }, []);
  const onSubmit = async (data: LessonCourseDto) => {
    try {
      console.log("Lesson: ", data);
      const response = await api.post("/LessonCourse", data);
      toast.success("Tạo bài học thành công " + response.data);
      reset(); // reset form sau khi tạo thành công
    } catch (error) {
      toast.error(`Không thể tạo bài học ${error}`);
    }
  };

  const handleDeleteLesson = async (lessonId: string) => {
    try {
      await api.delete(`/LessonCourse/${lessonId}`);
      setLesson(lesson.filter((c) => c.id !== lessonId));
      toast.success("Xóa khóa học thành công");
    } catch (error) {
      toast.error(`Không xóa khóa học ${error}`);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <CardContent>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle> Tạo bài học</CardTitle>
            <Button
              variant="outline"
              onClick={() => navigate({ to: "/admin/create_content" })}
            >
              🔙 Quay lại
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              placeholder="Tiêu đề nội dung"
              {...register("title", { required: "Vui lòng nhập tiêu đề" })}
            />
            <Input
              placeholder="link video"
              {...register("videoUrl", {
                required: "Hãy up link video",
              })}
            />
            <Input
              placeholder="link video"
              {...register("duration", {
                required: "Hãy up link video",
              })}
            />

            <Controller
              name="contentCourseId"
              control={control}
              rules={{ required: "Vui lòng chọn khóa học" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn giai đoạn khóa học" />
                  </SelectTrigger>
                  <SelectContent>
                    {content.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Đang tạo..." : "Tạo bài học"}
            </Button>
          </form>
          <div className="pt-4 text-right">
            <Button variant="ghost" onClick={() => navigate({ to: "/course" })}>
              Xong
            </Button>
          </div>
        </CardContent>
      </CardContent>
      <CardContent className="space-y-3">
        {lesson.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white border rounded-lg p-3 shadow-sm"
          >
            <div className="text-sm font-medium">{item.title}</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Sửa
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDeleteLesson(item.id)}
              >
                Xóa
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </div>
  );
};
