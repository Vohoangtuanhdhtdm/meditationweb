import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-tr from-[#e0f2f1] to-[#ffffff] py-32 px-6 text-center overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold mb-4 tracking-tight text-gray-900"
        >
          Về <span className="text-teal-600">Presence</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-xl text-gray-600"
        >
          Nơi sự tĩnh tại gặp công nghệ – một không gian số giúp bạn quay về với
          chính mình, từng khoảnh khắc.
        </motion.p>
      </div>

      {/* Giới thiệu Presence */}
      <div className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-5 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://i.pinimg.com/736x/39/b5/4e/39b54e68f011dc9c05db1c7172001043.jpg"
            alt="Meditation"
            className="rounded-3xl size-1/2 shadow-xl"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Sự Khởi Nguồn Của Presence
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Presence không chỉ là ứng dụng – mà là người bạn đồng hành trên hành
            trình trở về với hơi thở, thân và tâm. Chúng tôi kết hợp triết lý
            chánh niệm cổ xưa với trải nghiệm người dùng hiện đại để giúp bạn
            thiền mỗi ngày, ở mọi nơi.
          </p>
        </motion.div>
      </div>

      {/* Tầm Nhìn - Sứ Mệnh - Giá Trị */}
      <div className="bg-[#f9fafb] py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {[
            {
              title: "Tầm Nhìn",
              desc: "Trở thành nền tảng dẫn đầu về thiền chánh niệm, lan tỏa sự tỉnh thức đến hàng triệu người dùng khắp châu Á.",
              img: "https://i.pinimg.com/736x/b4/f5/8e/b4f58e5f77c51f99e016010654cd49b1.jpg",
            },
            {
              title: "Sứ Mệnh",
              desc: "Đơn giản hóa thiền định, đưa sự an yên vào cuộc sống hiện đại thông qua công nghệ tinh tế và thiết kế tối giản.",
              img: "https://i.pinimg.com/736x/3b/a5/63/3ba5631fbdbb7d1ad0f7f1360c057527.jpg",
            },
            {
              title: "Giá Trị",
              desc: "An nhiên – Chân thành – Gắn kết: Chúng tôi tin vào sức mạnh của sự tĩnh lặng, kết nối và chân thật trong mỗi trải nghiệm.",
              img: "https://i.pinimg.com/736x/5d/cf/d4/5dcfd4b9955bdaa0449b75be742b7cbb.jpg",
            },
          ].map((item, idx) => (
            <Card
              key={idx}
              className="overflow-hidden shadow-md transition hover:shadow-xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
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

      {/* Đội ngũ sáng lập */}
      <div className="container mx-auto px-6 py-24 text-center">
        <h3 className="text-4xl font-bold mb-14">
          Gặp Gỡ Những Người Sáng Lập
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            {
              name: "Minh Tâm",
              role: "Thiền sư & Cố vấn nội dung",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Thiện Nhân",
              role: "Founder & CEO",
              img: "https://randomuser.me/api/portraits/men/52.jpg",
            },
            {
              name: "Ngọc Linh",
              role: "UX Designer",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
            },
          ].map((member, idx) => (
            <Card
              key={idx}
              className="w-64 shadow-md hover:scale-105 transition"
            >
              <CardContent className="flex flex-col items-center pt-6 pb-4">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage src={member.img} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <p className="font-semibold text-gray-800">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-teal-100 to-blue-50 py-24 text-center px-6">
        <motion.h4
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bắt đầu hành trình chánh niệm với Presence
        </motion.h4>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
          Tĩnh lặng không phải là xa cách – đó là một điểm đến trong chính bạn.
          Hãy để Presence dẫn đường.
        </p>
        <a
          href="/signup"
          className="inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-teal-700 transition"
        >
          Khám phá ngay
        </a>
      </div>
    </section>
  );
};

export default About;
