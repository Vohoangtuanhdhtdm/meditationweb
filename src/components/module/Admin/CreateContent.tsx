import { api } from "@/services/api";
import {
  ContentCourseDto,
  CreateContentCourseDto,
  PhaseCourseDto,
} from "@/types/course.type";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function CreateContent() {
  const [phase, setPhase] = useState<PhaseCourseDto[]>([]);
  const [content, setContent] = useState<ContentCourseDto[]>([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<CreateContentCourseDto>({
    defaultValues: {
      title: "",
      description: "",
      phaseCourseId: "",
    },
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("/PhaseCourse");
        setPhase(response.data);
        const phaseRes = await api.get("/ContentCourse");
        setContent(phaseRes.data);
      } catch (error) {
        toast.error(`Không thể tải danh sách khóa học ${error}`);
      }
    };
    fetchCourses();
  }, []);

  const handleDeleteContent = async (contentId: string) => {
    try {
      await api.delete(`/ContentCourse/${contentId}`);
      setContent(content.filter((c) => c.id !== contentId));
      toast.success("Xóa khóa học thành công");
    } catch (error) {
      toast.error(`Không xóa khóa học ${error}`);
    }
  };

  const onSubmit = async (data: CreateContentCourseDto) => {
    try {
      console.log("Content: ", data);
      const response = await api.post("/ContentCourse", data);
      toast.success("Tạo giai đoạn thành công " + response.data);
      reset(); // reset form sau khi tạo thành công
    } catch (error) {
      toast.error(`Không thể tạo giai đoạn ${error}`);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle> Tạo nội dung</CardTitle>
            <Button
              variant="outline"
              onClick={() => navigate({ to: "/admin/create_phase" })}
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
              placeholder="Mô tả"
              {...register("description", {
                required: "Hãy mô tả chi tiết nội dung",
              })}
            />

            <Controller
              name="phaseCourseId"
              control={control}
              rules={{ required: "Vui lòng chọn khóa học" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn giai đoạn khóa học" />
                  </SelectTrigger>
                  <SelectContent>
                    {phase.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Đang tạo..." : "Tạo nội dung"}
            </Button>
          </form>
          <div className="pt-4 text-right">
            <Button
              variant="ghost"
              onClick={() => navigate({ to: "/admin/create_lesson" })}
            >
              ➕ Tiếp theo
            </Button>
          </div>
        </CardContent>
      </Card>
      <CardContent className="space-y-3">
        {content.map((item) => (
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
                onClick={() => handleDeleteContent(item.id)}
              >
                Xóa
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </div>
  );
}

export default CreateContent;
