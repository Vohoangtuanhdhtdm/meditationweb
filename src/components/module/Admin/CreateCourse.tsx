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
import {
  ContentCourseDto,
  CourseDto,
  CreateContentCourseDto,
  CreateCourseDto,
  CreateLessonCourseDto,
  CreatePhaseCourseDto,
  PhaseCourseDto,
} from "@/types/course.type";
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
  const [phase, setPhase] = useState<CreatePhaseCourseDto>({
    title: "",
    courseId: "",
  });
  const [content, setContent] = useState<CreateContentCourseDto>({
    title: "",
    description: "",
    phaseCourseId: "",
  });
  const [lesson, setLesson] = useState<CreateLessonCourseDto>({
    title: "",
    videoUrl: "",
    duration: 0,
    contentCourseId: "",
  });
  const [ctvs, setCtvs] = useState<CTVDto[]>([]);
  const [courses, setCourses] = useState<CourseDto[]>([]);
  const [loading, setLoading] = useState(false);
  const roles = JSON.parse(Cookies.get("roles") || "[]") as string[];
  // Check for Admin role
  useEffect(() => {
    if (!roles.includes("Admin")) {
      toast.error("Bạn cần quyền Admin để truy cập chức năng này");
      navigate({ to: "/" });
    }
  }, [roles, navigate]);

  // Fetch CTVs for selection
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

  // Fetch existing courses
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
      setPhase({ ...phase, courseId: newCourse.id });
      setCourses([...courses, newCourse]);
      toast.success("Tạo khóa học thành công");
    } catch (error) {
      toast.error(`Không tạo được khóa học ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePhase = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/PhaseCourse", phase);
      const newPhase: PhaseCourseDto = response.data;
      setContent({ ...content, phaseCourseId: newPhase.id });
      toast.success("Tạo giai đoạn thành công");
    } catch (error) {
      toast.error(`Không thể tạo giai đoạn ${error}`);
    } finally {
      setLoading(false);
    }
  };
  const handleCreateContent = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/ContentCourse", content);
      const newContent: ContentCourseDto = response.data;
      setLesson({ ...lesson, contentCourseId: newContent.id });
      toast.success("Tạo nội dung thành công");
    } catch (error) {
      toast.error(`Không thể tạo nội dung ${error}`);
    } finally {
      setLoading(false);
    }
  };
  const handleCreateLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/LessonCourse", lesson);
      toast.success("Tạo bài học thành công");
    } catch (error) {
      toast.error(`Không thể tạo bài học ${error}`);
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
    <div>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">Tạo khóa học mới</h1>
        <Separator />
        {/* Course Form */}
        <Card>
          <CardHeader>
            <CardTitle>Tạo khóa học</CardTitle>
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
              <Button type="submit" disabled={loading}>
                {loading ? "Đang tạo..." : "Tạo khóa học"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Phase Form */}
        <Card>
          <CardHeader>
            <CardTitle>Tạo giai đoạn</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreatePhase} className="space-y-4">
              <Input
                placeholder="Tiêu đề giai đoạn"
                value={phase.title}
                onChange={(e) => setPhase({ ...phase, title: e.target.value })}
                required
              />
              <Button type="submit" disabled={loading || !phase.courseId}>
                {loading ? "Đang tạo..." : "Tạo giai đoạn"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Content Form */}
        <Card>
          <CardHeader>
            <CardTitle>Tạo nội dung</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateContent} className="space-y-4">
              <Input
                placeholder="Tiêu đề nội dung"
                value={content.title}
                onChange={(e) =>
                  setContent({ ...content, title: e.target.value })
                }
                required
              />
              <Textarea
                placeholder="Mô tả nội dung"
                value={content.description}
                onChange={(e) =>
                  setContent({ ...content, description: e.target.value })
                }
                required
              />
              <Button
                type="submit"
                disabled={loading || !content.phaseCourseId}
              >
                {loading ? "Đang tạo..." : "Tạo nội dung"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Lesson Form */}
        <Card>
          <CardHeader>
            <CardTitle>Tạo bài học</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateLesson} className="space-y-4">
              <Input
                placeholder="Tiêu đề bài học"
                value={lesson.title}
                onChange={(e) =>
                  setLesson({ ...lesson, title: e.target.value })
                }
                required
              />
              <Input
                placeholder="URL video"
                value={lesson.videoUrl}
                onChange={(e) =>
                  setLesson({ ...lesson, videoUrl: e.target.value })
                }
                required
              />
              <Input
                type="number"
                placeholder="Thời lượng (phút)"
                value={lesson.duration}
                onChange={(e) =>
                  setLesson({ ...lesson, duration: parseInt(e.target.value) })
                }
                required
              />
              <Button
                type="submit"
                disabled={loading || !lesson.contentCourseId}
              >
                {loading ? "Đang tạo..." : "Tạo bài học"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Course List */}
        <Card>
          <CardHeader>
            <CardTitle>Danh sách khóa học</CardTitle>
          </CardHeader>
          <CardContent>
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex justify-between items-center py-2"
              >
                <span>{course.title}</span>
                <div>
                  <Button
                    variant="outline"
                    className="mr-2"
                    // onClick={() => navigate(`/courses/edit/${course.id}`)}
                  >
                    Sửa
                  </Button>
                  <Button
                    variant="destructive"
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
