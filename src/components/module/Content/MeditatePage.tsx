
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from 'lucide-react';

const MeditatePage = () => {
  return (
    <div className="min-h-screen bg-green-10 text-black p-10 relative ">
      {/* Header */}
      <div className="text-left mb-12">
      <div className="fixed top-[80px] right-[40px] z-50 text-gray-600 hover:text-green-500 cursor-pointer">
        <MessageCircle size={44} />
      </div>

        <h1 className="text-5xl font-bold mb-4 mt-16">
           <span className="bg-green-100 text-black px-2">How To Meditate</span>
        </h1>
        <p className="text-left  mb-4 mx-auto text-xl ml-6">
          BY KATHY KATELLA November 29, 2022
        </p>
        <p className="text-left  mb-4  mx-auto text-xl">
          A simple meditation practice could make you healthier.
        </p>
      </div>

      <div className="relative flex justify-center mt-24 mb-20">
        {/* Ảnh nền */}
        <img
          src="https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_2.0,f_auto,g_faces:auto,q_auto:eco,w_1400/v1/yms/prod/7ac24345-1a6b-4a88-8dcd-fdfbf34a9ad6"
          alt="Meditation"
          className="shadow-xl w-[1100px] h-[400px] object-cover rounded-3xl"
        />

        {/* Khối trong suốt mờ */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white/40 backdrop-blur-md p-6 rounded-xl shadow-lg text-center">
            <p className="text-sm text-gray-700 font-medium">
            Know that this meditation practice is not about erasing your thoughts; it’s about focusing on a singular thing.  ✨
            </p>
          
          </div>
        </div>
      </div>

      

      {/* Feature section giống ảnh bạn gửi */}
      <div className="flex flex-col md:flex-row items-center gap-16 my-20 max-w-6xl mx-auto">

        {/* Nội dung bên phải */}
        <div className="max-w-7xl mx-auto flex gap-24">
          <p className="text-center whitespace-normal">
            If you find that you were <span className="bg-green-100 text-black px-2">distracted</span> by your thoughts or a bodily sensation, like tightness in your
             neck or pain in your back, don’t worry. Even experienced <span className="bg-green-100 text-black px-2">meditators</span>  know that their mind is naturally 
             going to wander sometimes.

            It's important to know that meditation is not meant to be a one-time activity. “The real strength comes from practice and regular use,”
             Dr. Soffer says.
             “It’s like lifting weights—you can’t walk into a gym and suddenly <span className="bg-green-100 text-black px-2">lift 400 pounds.</span> You build up to it.”

            “Similarly, experienced meditators know that every 10-minute practice they do isn’t going to be perfect,” he says. “But if they do 
            it consistently, they will start to feel better in<span className="bg-green-100 text-black px-2"> both body and mind,</span> and they will see the effects
             of their meditation reflected in their daily life.”
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="text-left space-y-8 text-lg ml-20">
        <section>
          <h2 className="text-3xl font-bold mb-10 mt-20 ">
            Step 1: Choose a quiet location.
          </h2>
          {/* Feature section giống ảnh bạn gửi */}
      <div className="max-w-7xl mx-auto flex gap-24">
        {/* Hình ảnh bên trái */}
        <div className="md:w-1/2 w-full ">
          <img
            src="https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_2.0,f_auto,g_faces:auto,q_auto:eco,w_700/v1/yms/prod/96a1a474-bd9e-47d1-9c29-4ab614706c0d"
            alt="Sitting Meditation"
            className="rounded-2xl shadow-xl w-[750px] h-[350px] object-cover"
          />
          <p className="text-sm italic text-gray-500 mt-2">'Credit: ' Getty Images</p>
        </div>

        {/* Nội dung bên phải */}
        <div className="md:w-1/2 w-full space-y-4 ">
          <h2 className="text-2xl font-semibold">Find a calm</h2>
          <p className="text-left whitespace-normal">
          Find a calm, quiet place where you can close the door to minimize distractions, away from your cell
           phone and other devices. If this is difficult, don’t worry. It doesn’t have to be completely silent,
            although, at the same time, you don’t want to meditate on a busy city street. 
          </p>
          <p>
          He encourages them to try again. “People should be aware that meditating is not as hard as they think 
          it is, and that no one is a ‘bad meditator,’” he says. “The most important thing is that meditation is
           about paying attention—beyond that, it’s a matter of keeping it simple.”
          </p>
        </div>
      </div>
        </section>

        <section>
        <h2 className="text-3xl font-semibold mb-10 mt-20 ">
          Step 2: Find a comfortable position.
          </h2>
          {/* Feature section giống ảnh bạn gửi */}
          <div className="max-w-7xl mx-auto flex gap-24">
        {/* Hình ảnh bên trái */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_2.0,f_auto,g_faces:auto,q_auto:eco,w_700/v1/yms/prod/1616b6ba-db06-42a0-ab0a-6278ccc1df0f"
            alt="Sitting Meditation"
            className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
          />
        </div>

        {/* Nội dung bên phải */}
        <div className="md:w-1/2 w-full space-y-4">
          <h2 className="text-2xl font-semibold">Sit in a chair</h2>
          <p className="text-left whitespace-normal">
            You can sit in a chair, on a cushion or stool, or cross-legged on the floor.
            Your back should be upright—not rigid—and don’t slouch. You might imagine that there is
            a string tugging lightly on the crown of your head. Lying on the floor is also acceptable,
            although some people will find themselves struggling against falling asleep.
          </p>
          <p>
          The percentage of adults in the United States who say they had practiced meditation in the 
          previous 12 months tripled between 2012 and 2017, from 4.1 to 14.2%, according to a national 
          survey. But many people quickly give up on the practice, often because they think they aren’t doing
           it properly, Dr. Soffer explains.
          </p>
        </div>
      </div>
        </section>

        <section>
          <p>
            By simply taking a few moments each day to breathe and observe, you can transform your
            mental and emotional well-being. Meditation is not a quick fix, but it is a powerful tool
            for lasting change.
          </p>
        </section>

        <section>
        <h2 className="text-3xl font-semibold mb-10 mt-20 ">
          Step 3: Choose a focus point.
        </h2>
          {/* Feature section giống ảnh bạn gửi */}
      <div className="max-w-7xl mx-auto flex gap-24">
        {/* Hình ảnh bên trái */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_2.0,f_auto,g_faces:auto,q_auto:eco,w_700/v1/yms/prod/47bb461f-31b4-48e7-a0c7-d2c0855f13e6"
            alt="Sitting Meditation"
            className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
          />
          <p className="text-sm italic text-gray-500 mt-2">'Credit: ' Getty Images</p>
        </div>

        {/* Nội dung bên phải */}
        <div className="md:w-1/2 w-full space-y-4">
          <h2 className="text-2xl font-semibold">Meditation practice</h2>
          <p className="text-left whitespace-normal">
            Know that this meditation practice is not about erasing your thoughts; it’s about 
            focusing on a singular thing. You should pay attention to your point of focus, and if you realize that 
            your mind is wandering, gently go back to that focus.
          </p>
          <p>
          A popular area of focus is the nostrils, where you can concentrate on your breath
           feeling cool as you inhale and warm as you exhale. (Remember, no need to focus on inhaling
            through your nose and exhaling through your mouth. Or counting. This meditation is just about maintaining focus.) 
          </p>
        </div>
      </div>
        </section>

        <section>
          <p>
            Or you can concentrate on the rising and falling of your stomach or the expansion and contraction
            of your chest as you breathe in and out. Some people prefer to use a mantra (a word or sound you repeat
            in your mind, such as "om" (pronounced with a hard "o" as in the word "home"). When thoughts come, 
            acknowledge them, then gently return to your focus point. The goal is to stay present in the moment.
          </p>
        </section>

        <section>
          <p>
            Dr. Soffer recommends 10 minutes a day as a manageable amount of time to start with—some say even a
            few minutes can help. Setting aside 10 minutes at the same time each day can help establish a routine. 
            Additionally, you can set a timer to alert you that your practice has ended. 
          </p>
        </section>
      </div>

      {/* Floating Card */}
      <Card
        className="absolute bottom-10 right-10 w-72"
        style={{
          background: "rgba(255, 255, 255, 0.04)",
          color: "black",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2">Quick Tip</h3>
          <p className="text-sm">
            You don’t need to clear your mind. Just notice, return, repeat.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MeditatePage;