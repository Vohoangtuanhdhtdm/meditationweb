import { Button } from "@/components/ui/button";

export default function YogaLandingPage() {
  return (
    <div className="relative bg-gradient-to-b from-white to-green-100 min-h-screen px-4 py-10 overflow-hidden">
        { /* Bong bóng nền */}
        <div className="absolute -top-1 -left-20 w-64 h-64 bg-green-300 rounded-full opacity-50 blur-3xl "></div>
        <div className="absolute -top-10 right-8 w-40 h-40 bg-green-400 rounded-full opacity-40 blur-2xl z-0"></div>
        <div className="absolute bottom-0 right-2  transform -translate-x-1/2 w-72 h-72 bg-green-400 rounded-full opacity-50 blur-2xl z-0"></div>

      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          What is{" "}
          <span className="bg-green-300 px-2 rounded-md">DMT meditation?</span>
        </h1>   
        <div className="mt-10 mb-12">
          <Button className="bg-black text-white text-lg px-6 py-3 rounded-full shadow-lg hover:scale-105 transition mb-10">
            Right Now
          </Button>
        </div>
      </div>

      {/* Nội dung chính: Văn bản trái - Hình ảnh phải */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-12 max-w-6xl mx-auto">
        {/* Văn bản mô tả */}
        <div className="text-left text-gray-700 leading-relaxed  bg-purple-200 rounded-full ">
          <p className="mb-4">
            Before understanding “what is DMT meditation?”, it is necessary to be familiar with DMT.
            DMT is a psychedelic substance usually found in plants and animals. Its high effect takes
            a person on a trip to self-reflection and spiritual experience.
          </p>
          <p className="mb-4">
            Research by Imperial College London highlights the benefit of DMT in increasing brain
            connectivity, resulting in improved communication between different areas and systems.
          </p>
          <p className="mb-4">
            DMT meditation infuses a similar effect without ingesting the substance. This practice
            harnesses the synergistic effect of meditation to pave a path of discovery and transformation.
          </p>
          <p className="mb-4">
            We implement it through meditative techniques such as breathwork, visualization, mantra
            recitation, and concentration exercises. These techniques create the DMT effect through
            heightened awareness and deep connection. Though this may not fully replicate the DMT
            experience, it’s still suitable for healing and self-improvement.
          </p>
        </div>

        {/* Hình ảnh Yoga girl */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-200 rounded-full opacity-60 blur-2xl z-0"></div>
          <img
            src="https://relevancerecovery.com/wp-content/uploads/2024/03/Benefits-of-DMT-meditation.jpg"
            alt="Yoga Girl"
            className="relative z-10 max-w-xs md:max-w-sm"
          />
        </div>
      </div>

      {/* Các biểu tượng / thống kê */}
      <div className="flex justify-center gap-10 flex-wrap mb-12">
        <div className="rounded-full overflow-hidden border-4 border-green-400 w-32 h-32 shadow-lg">
          <img
            src="https://t.pimg.jp/082/898/260/1/82898260.jpg"
            alt="Yoga Pose"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-pink-200 rounded-xl p-4 w-40 shadow-md text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRAhnkVJRabv7t3PvxTda_tpZxX-Ty3TFRdcA-xtcJVGJecYO-oF9BXvESCzmB3ECPbvY&usqp=CAU"
            alt="Trainer"
            className="mx-auto mb-2 rounded-full w-16 h-16 object-cover"
          />
          <p className="text-sm font-medium">Meditation classes</p>
          <p className="text-sm text-gray-600">Participants</p>
        </div>

        <div className="rounded-full overflow-hidden border-4 border-green-400 w-32 h-32 shadow-lg">
          <img
            src="https://t.pimg.jp/082/898/260/1/82898260.jpg"
            alt="Yoga Pose"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Trích dẫn và lời khuyên 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-200 rounded-xl p-6 max-w-5xl mx-auto mb-12">
        <div className="text-left">
          <p className="text-sm text-gray-500 font-semibold">#01</p>
          <p className="font-medium text-lg">
            Whoever You Are And Whatever You’re Looking For, You’ll Find Your Place With Us
          </p>
        </div>
        <Card className="bg-white shadow-lg">
          <CardContent className="p-4">
            <p className="italic">
              “Yoga does not just change the way we see things, it transforms the person who sees.”
            </p>
            <div className="mt-4 text-sm text-right font-semibold text-blue-700">
              — Jason Crandell
            </div>
          </CardContent>
        </Card>
      </div>
    */}
      <section className="bg-white rounded-xl shadow-lg p-6 max-w-6xl mx-auto mt-12">
  <div className="flex flex-col md:flex-row items-center gap-8">
    
    {/* Văn bản bên trái */}
    <div className="md:w-1/2 text-left text-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Process of DMT Meditation</h2>
      <p className="mb-4">
        DMT meditation is a journey inward. While there’s no single strict method, many practitioners follow
        a process that leads to profound inner exploration and healing:
      </p>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>Preparation:</strong> Set your intention, prepare a calm space, and surround yourself with support if needed.
        </li>
        <li>
          <strong>Meditation:</strong> Use breathwork, visualization, or mantras to enter a deep meditative state.
        </li>
        <li>
          <strong>Integration:</strong> Reflect on the experience and integrate insights through journaling or sharing.
        </li>
      </ul>
    </div>
    <div className="md:w-1/2 text-left text-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">What is Meditation?</h2>
      <p className="mb-4">
      Meditation is a practice that involves focusing the mind to achieve a state of calm and clarity. When we explore 
      the meaning of meditation, we understand it as a method to cultivate mindfulness and awareness. To define meditation
       more precisely.
      </p>
      <ul className="list-disc list-inside space-y-3">
        <p>
          How do you learn to meditate? In mindfulness meditation, we’re learning how to pay attention to the breath as it goes in and out, and notice when the mind wanders from this task. This practice of returning to the breath builds the muscles of attention and mindfulness.
        </p>
        
        
      </ul>
    </div>

    {/* Hình ảnh bên phải */}
    <div className="md:w-1/2 relative">
      {/* Vòng sáng nền khuyết */}
      <div className="absolute -top-5 -right-5 w-64 h-40 bg-purple-200 rounded-3xl blur-2xl opacity-50 -z-10"></div>

      {/* Hình ảnh chính */}
      <img
        src="https://media.istockphoto.com/id/1372597649/vi/vec-to/t%E1%BA%ADp-th%E1%BB%83-d%E1%BB%A5c-th%E1%BB%9F-h%C3%ADt-th%E1%BB%9F-s%C3%A2u-qua-m%C5%A9i-v%C3%AC-l%E1%BB%A3i-%C3%ADch-v%C3%A0-n%C3%A3o-l%C3%A0m-vi%E1%BB%87c-t%E1%BB%91t-yoga-l%C3%A0nh-m%E1%BA%A1nh-v%C3%A0-th%C6%B0.jpg?s=612x612&w=0&k=20&c=TyAQkNRM4JCnKduoSkQD94iXUM81s14oV5mHhSU4Gmk="
        alt="DMT Meditation Visual"
        className="rounded-xl shadow-xl object-cover w-[400px] max-h-[350px]"
      />
    </div>
  </div>
</section>

      
    </div>
    
  );
}
