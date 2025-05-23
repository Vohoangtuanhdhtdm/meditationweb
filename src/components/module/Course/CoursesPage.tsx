import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { CourseDto } from "@/types/course.type";

// const allCourses = [
//   {
//     id: "1",
//     title: "Thiền Định Cơ Bản",
//     description:
//       "Học các kỹ thuật thiền cơ bản để giảm căng thẳng và tăng tập trung.",
//     duration: "4 tuần",
//     level: "Người mới bắt đầu",
//     image:
//       "https://i.pinimg.com/736x/00/18/af/0018af3cdbf64184e57a4f1217efd05b.jpg",
//   },
//   {
//     id: "2",
//     title: "Thiền Chánh Niệm Nâng Cao",
//     description: "Nâng cao kỹ năng thiền với các bài tập chánh niệm sâu sắc.",
//     duration: "6 tuần",
//     level: "Trung cấp",
//     image:
//       "https://i.pinimg.com/736x/d5/b9/b3/d5b9b3d4563e2ed53916991a185894fe.jpg",
//   },
//   {
//     id: "3",
//     title: "Thiền Tâm Từ",
//     description:
//       "Phát triển lòng từ bi và sự kết nối với bản thân và người khác.",
//     duration: "5 tuần",
//     level: "Tất cả trình độ",
//     image:
//       "https://i.pinimg.com/736x/00/ee/0e/00ee0ef74987394161c3f4b6c77be532.jpg",
//   },
// ];

const CoursesSection = ({
  title,
  courses,
}: {
  title: string;
  courses: CourseDto[] | null;
}) => (
  <section className="container mx-auto px-4 py-12">
    <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-8 text-center">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses?.map((course) => (
        <Card
          key={course.id}
          className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-white"
        >
          <img
            src="https://i.pinimg.com/736x/c5/e1/d1/c5e1d1e7cdfcd548364f9886a9347cf1.jpg"
            alt={course.title}
            className="w-full h-44 md:h-52 lg:h-56 object-cover"
          />
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold text-gray-800">
              {course.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6 text-gray-600 text-sm">
            <p className="mb-3">{course.description}</p>
            <p className="italic text-gray-500 mb-4">Giá: {course.price}</p>
            <Button
              asChild
              className="bg-teal-600 hover:bg-teal-700 text-white w-full py-2 rounded-full text-sm"
            >
              <Link to="/course/$courseId" params={{ courseId: course.id }}>
                Xem chi tiết
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

const CoursesPage: React.FC = () => {
  const [allCourse, setAllCourse] = useState<CourseDto[] | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const Course = await api.get("/Course");
        console.log("tất cả khóa học", Course);
        setAllCourse(Course.data);
        const userId = Cookies.get("userId");
        if (!userId) {
          toast.error("Hãy đăng nhập để xem thông tin cá nhân");
          return;
        }
      } catch (err) {
        toast.error(`Failed to fetch profile ${err}`);
      }
    };

    fetchUser();
  }, []);
  return (
    <div className="min-h-screen px-10 py-5 bg-gradient-to-b from-white to-teal-50 flex flex-col">
      <main className="flex-grow">
        <CoursesSection title="Khóa học đang học" courses={allCourse} />
        <CoursesSection title="Khóa học mới" courses={allCourse} />
        <CoursesSection title="Khóa học nổi bật" courses={allCourse} />
        <CoursesSection title="Tất cả khóa học" courses={allCourse} />
      </main>
    </div>
  );
};

export default CoursesPage;
