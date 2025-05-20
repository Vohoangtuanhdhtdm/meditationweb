import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const Landing: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Tìm Lại <span className="text-teal-600">Bình Yên</span> Trong Tâm
            Hồn
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Khóa học thiền định trực tuyến giúp bạn giảm căng thẳng, tăng sự tập
            trung và sống hạnh phúc hơn mỗi ngày.
          </p>
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Bắt đầu ngay
            <svg
              className={cn(
                "ml-2 h-5 w-5 transition-transform",
                isHovered && "translate-x-1"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
        <div className="flex-1">
          <img
            src="https://i.pinimg.com/736x/27/2e/23/272e2381eff5bffcda86a452bda38474.jpg"
            alt="Meditation"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Lợi Ích Từ Thiền Định
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Tăng Tập Trung",
                desc: "Nâng cao khả năng tập trung với các bài thiền được thiết kế khoa học.",
                img: "https://i.pinimg.com/736x/0d/c1/3e/0dc13e6ad211c477e58733c1cfdf1ea9.jpg",
              },
              {
                title: "Giảm Căng Thẳng",
                desc: "Thư giãn tâm trí và cơ thể qua các kỹ thuật thiền đơn giản.",
                img: "https://i.pinimg.com/736x/a3/f0/0b/a3f00b73cb5f5a892538ec9dd945d980.jpg",
              },
              {
                title: "Sống Hạnh Phúc",
                desc: "Kết nối với bản thân và tìm thấy ý nghĩa trong cuộc sống hàng ngày.",
                img: "https://i.pinimg.com/736x/f7/fa/44/f7fa441cdc4aed46ab18b13a8e2e2540.jpg",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow bg-white"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl text-teal-700">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Trải Nghiệm Của Học Viên
        </h3>
        <Carousel className="max-w-2xl mx-auto">
          <CarouselContent>
            {[
              {
                quote:
                  "Serenity giúp tôi tìm thấy sự tĩnh lặng giữa cuộc sống bận rộn.",
                name: "Hà My, 28 tuổi",
                imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
              },
              {
                quote:
                  "Các bài thiền ngắn nhưng rất hiệu quả, tôi cảm thấy nhẹ nhõm hơn.",
                name: "Đức Anh, 32 tuổi",
                imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
              },
            ].map((item, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-sm p-6">
                  <CardContent className="flex flex-col items-center text-center space-y-4">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover shadow-md"
                    />
                    <p className="text-gray-600 italic max-w-md">
                      "{item.quote}"
                    </p>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-50 py-20 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-gray-900 mb-6">
            Bắt Đầu Hành Trình Thiền Định
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Đăng ký ngay hôm nay để trải nghiệm sự bình an và hạnh phúc từ thiền
            định.
          </p>
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8"
          >
            Tham gia miễn phí
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
