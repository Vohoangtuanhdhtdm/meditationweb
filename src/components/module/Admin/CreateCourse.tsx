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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { api } from "@/services/api";
import { CourseDto, CreateCourseDto } from "@/types/course.type";
import { CTVDto } from "@/types/ctv.type";
import { useNavigate } from "@tanstack/react-router";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function CreateCourse() {
  const navigate = useNavigate();
  const [course, setCourse] = useState<CreateCourseDto>({
    title: "",
    description: "",
    price: 0,
    ctvId: "",
  });

  const [ctvs, setCtvs] = useState<CTVDto[]>([]);
  const [courses, setCourses] = useState<CourseDto[]>([]);
  const [loading, setLoading] = useState(false);
  const roles = JSON.parse(Cookies.get("roles") || "[]") as string[];

  useEffect(() => {
    if (!roles.includes("Admin")) {
      toast.error("Bạn cần quyền Admin để truy cập chức năng này");
      navigate({ to: "/" });
    }
  }, [roles, navigate]);

  useEffect(() => {
    const fetchCtvs = async () => {
      try {
        const response = await api.get("/CTV");
        setCtvs(response.data);
      } catch (error) {
        toast.error(`Không thể tải danh sách cộng tác viên ${error}`);
      }
    };
    fetchCtvs();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("/Course");
        setCourses(response.data);
      } catch (error) {
        toast.error(`Không thể tải danh sách khóa học ${error}`);
      }
    };
    fetchCourses();
  }, []);

  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/Course", course);
      const newCourse: CourseDto = response.data;
      setCourses([...courses, newCourse]);
      toast.success("Tạo khóa học thành công");
    } catch (error) {
      toast.error(`Không tạo được khóa học ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCourse = async (courseId: string) => {
    try {
      await api.delete(`/Course/${courseId}`);
      setCourses(courses.filter((c) => c.id !== courseId));
      toast.success("Xóa khóa học thành công");
    } catch (error) {
      toast.error(`Không xóa khóa học ${error}`);
    }
  };

  return (
    <div className="min-h-screen bg-muted/50 py-10">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Tạo khóa học mới</h1>
          <Button variant="outline" onClick={() => navigate({ to: "/" })}>
            🔙 Quay lại
          </Button>
        </div>

        <Separator />

        {/* Course Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Thông tin khóa học
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateCourse} className="space-y-4">
              <Input
                placeholder="Tiêu đề khóa học"
                value={course.title}
                onChange={(e) =>
                  setCourse({ ...course, title: e.target.value })
                }
                required
              />
              <Textarea
                placeholder="Mô tả khóa học"
                value={course.description}
                onChange={(e) =>
                  setCourse({ ...course, description: e.target.value })
                }
                required
              />
              <Input
                type="number"
                placeholder="Giá (VND)"
                value={course.price}
                onChange={(e) =>
                  setCourse({ ...course, price: parseFloat(e.target.value) })
                }
                required
              />
              <Select
                onValueChange={(value) =>
                  setCourse({ ...course, ctvId: value })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Chọn cộng tác viên" />
                </SelectTrigger>
                <SelectContent>
                  {ctvs.map((ctv) => (
                    <SelectItem key={ctv.id} value={ctv.id}>
                      {ctv.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center justify-between">
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Đang tạo..." : "✅ Tạo khóa học"}
                </Button>
              </div>
            </form>

            <div className="pt-4 text-right">
              <Button
                variant="ghost"
                onClick={() => navigate({ to: "/admin/create_phase" })}
              >
                ➕ Tiếp theo
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Course List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">
              Danh sách khóa học
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex items-center justify-between bg-white border rounded-lg p-3 shadow-sm"
              >
                <div className="text-sm font-medium">{course.title}</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Sửa
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteCourse(course.id)}
                  >
                    Xóa
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
