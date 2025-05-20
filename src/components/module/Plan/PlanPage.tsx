import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar"; // dùng alias @ nếu đã cấu hình
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", mindfulness: 60, restless: 40 },
  { name: "Feb", mindfulness: 50, restless: 60 },
  { name: "Mar", mindfulness: 70, restless: 50 },
  { name: "Apr", mindfulness: 80, restless: 65 },
  { name: "May", mindfulness: 60, restless: 80 },
];

const PlanPageComponent = () => {
  return (
    <div>
      {" "}
      <div className="min-h-screen bg-green-10 text-black p-10 relative">
        <h1 className="text-3xl font-bold mb-2">Welcome Presence</h1>
        <p className="mb-6 text-gray-600">
          Track your personal progress meditation overview
        </p>

        {/* Layout chia 2 cột: nội dung + lịch */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-4">
          {/* Cột trái: nội dung chính */}
          <div>
            {/* Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <Card className="transition-transform duration-300 ease-in-out hover:scale-110 active:scale-125 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center">
                    {/* Avatar hình ảnh thay vì nền tím */}
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/001/892/265/non_2x/woman-meditating-concept-for-yoga-meditation-relax-healthy-lifestyle-in-landscape-free-vector.jpg" // hoặc đường dẫn ảnh online
                      alt="Avatar"
                      className="w-28 h-24 rounded-full object-cover mb-2"
                    />
                    <p className="font-semibold">Adeline Watson</p>
                    <p className="text-sm text-gray-500">
                      ID: 1890274 | 24 Years old
                    </p>
                    <div className="mt-2 flex space-x-2">
                      <span className="text-orange-500">🔥 56 Days</span>
                      <span className="text-blue-500">🌱 Beginner</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2: Full ảnh */}
              <Card className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 active:scale-125 cursor-pointer">
                <CardContent className="p-0 relative">
                  <div className="absolute inset-0 p-4 flex flex-col justify-between text-black">
                    <div className="self-end text-lg">↗</div>
                    <div>
                      <p className="text-sm text-gray-700">
                        Total meditated time
                      </p>
                      <p className="text-2xl font-bold">17 h 27 min</p>
                    </div>
                  </div>
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/020/579/620/small_2x/meditating-woman-semi-flat-color-character-set-sitting-figure-full-body-person-on-white-calm-lady-isolated-modern-cartoon-style-illustration-for-graphic-design-and-animation-pack-vector.jpg"
                    alt="Meditation Overview"
                    className="w-full h-full object-cover"
                  />

                  {/* Văn bản chèn lên ảnh */}
                </CardContent>
              </Card>

              {/* Session & Duration */}
              {/* Card nhỏ: Session Complete */}
              <div className="flex flex-col justify-between gap-4 h-full">
                {/* Card nhỏ: Average Duration 1 */}
                <Card className="flex-1 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110 active:scale-125 cursor-pointer">
                  <CardContent className="p-4 flex items-center justify-between h-full">
                    <div>
                      <p className="text-sm text-gray-600">Average Duration</p>
                      <p className="text-xl font-bold">32 min</p>
                    </div>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVlfPSbytEcT5PwMv6VCT0nz845bZT-ZLHQ8mjoj45M0d8vVvWChZpROhOLOLluTCwAs&usqp=CAU" // hoặc đường dẫn ảnh online
                      alt="Avatar"
                      className="w-28 h-24 rounded-full object-cover mb-2"
                    />
                    <div className="text-2xl">🟢</div>
                  </CardContent>
                </Card>

                {/* Card nhỏ: Average Duration 2 */}
                <Card className="flex-1 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110 active:scale-125 cursor-pointer">
                  <CardContent className="p-4 flex items-center justify-between h-full">
                    <div>
                      <p className="text-sm text-gray-600">Average Duration</p>
                      <p className="text-xl font-bold">32 min</p>
                    </div>
                    <img
                      src="https://media.istockphoto.com/id/1182304971/vector/planner-schedule-calendar-time-timetable-concept-vector-flat-graphic-design-illustration.jpg?s=170667a&w=0&k=20&c=Hb4FKS8LAcroGqgZBSOsDZ4-EZFDjMU46Ika9hm_sFg=" // hoặc đường dẫn ảnh online
                      alt="Avatar"
                      className="w-28 h-24 rounded-full object-cover mb-2"
                    />
                    <div className="text-2xl">🟢</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Biểu đồ Emotional Focusing */}
            <div className="mt-8">
              <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow mb-9">
                {/* Tiêu đề + icon */}
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🎯</span>
                  <h2 className="font-semibold text-lg">Emotional Focusing</h2>
                </div>

                {/* Legend */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                    <span className="text-sm text-gray-700">
                      Peak Mindfulness
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="text-sm text-gray-700">Restless Mind</span>
                  </div>
                </div>

                {/* Dropdown thời gian */}
                <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-md cursor-pointer">
                  <span className="text-gray-600">📅</span>
                  <span className="text-sm text-gray-700">Yearly</span>
                  <span className="text-gray-600">▾</span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="mindfulness"
                    stroke="#4F46E5"
                    name="Peak Mindfulness"
                  />
                  <Line
                    type="monotone"
                    dataKey="restless"
                    stroke="#EF4444"
                    name="Restless Mind"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cột phải: Card Lịch full chiều dọc */}
          <div className="h-full w-full">
            <Card className="h-full w-full max-w-md mx-auto">
              {" "}
              {/* Tăng max width */}
              <CardContent className="p-1">
                {" "}
                {/* Padding rộng hơn */}
                <h2 className="text-xl font-semibold mb-4">Scheduling Class</h2>
                <Calendar className="mb-6 w-full h-72" />{" "}
                {/* Chiều cao lịch lớn hơn */}
                <div className="space-y-3">
                  <div className="p-3 bg-pink-100 rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-110 active:scale-125 cursor-pointer">
                    🧘 How to meditate (10:00 - 12:00)
                  </div>
                  <div className="p-3 bg-orange-100 rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-110 active:scale-125 cursor-pointer">
                    📯 Guided Breathing (12:00 - 14:00)
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-110 active:scale-125 cursor-pointer">
                    🧘‍♂️ Body Scan Meditation (15:00 - 16:00)
                  </div>
                  <div className="p-3 bg-red-100 rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-110 active:scale-125 cursor-pointer">
                    🕛 Find a calm and quiet place to sit. Start with a 5-minute
                    meditation. (20:00 - 21:00)
                  </div>
                  <div className="p-3 bg-red-100 rounded-lg shadow-sm transition-transform duration-300 ease-in-out hover:scale-110 active:scale-125 cursor-pointer">
                    😴 Transition to Sleep (20:00 - 21:00)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPageComponent;
