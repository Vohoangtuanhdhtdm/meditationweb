import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/services/api";
import {
  CourseDto,
  CreatePhaseCourseDto,
  PhaseCourseDto,
} from "@/types/course.type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";

export const CreatePhase = () => {
  const [courses, setCourses] = useState<CourseDto[]>([]);
  const [phase, setPhase] = useState<PhaseCourseDto[]>([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<CreatePhaseCourseDto>({
    defaultValues: {
      title: "",
      courseId: "",
    },
  });

  // Fetch all courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("/Course");
        setCourses(response.data);
        const phaseRes = await api.get("/PhaseCourse");
        setPhase(phaseRes.data);
      } catch (error) {
        toast.error(`Không thể tải danh sách khóa học ${error}`);
      }
    };
    fetchCourses();
  }, []);

  const handleDeletePhase = async (phaseId: string) => {
    try {
      await api.delete(`/PhaseCourse/${phaseId}`);
      setPhase(phase.filter((c) => c.id !== phaseId));
      toast.success("Xóa khóa học thành công");
    } catch (error) {
      toast.error(`Không xóa khóa học ${error}`);
    }
  };

  const onSubmit = async (data: CreatePhaseCourseDto) => {
    try {
      console.log("data phase: ", data);
      const response = await api.post("/PhaseCourse", data);
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
            <CardTitle>Tạo giai đoạn</CardTitle>
            <Button
              variant="outline"
              onClick={() => navigate({ to: "/admin/create_course" })}
            >
              🔙 Quay lại
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              placeholder="Tiêu đề giai đoạn"
              {...register("title", { required: "Vui lòng nhập tiêu đề" })}
            />

            <Controller
              name="courseId"
              control={control}
              rules={{ required: "Vui lòng chọn khóa học" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn khóa học" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Đang tạo..." : "Tạo giai đoạn"}
            </Button>
          </form>
          <div className="pt-4 text-right">
            <Button
              variant="ghost"
              onClick={() => navigate({ to: "/admin/create_content" })}
            >
              ➕ Tiếp theo
            </Button>
          </div>
        </CardContent>
      </Card>
      <CardContent className="space-y-3">
        {phase.map((item) => (
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
                onClick={() => handleDeletePhase(item.id)}
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
