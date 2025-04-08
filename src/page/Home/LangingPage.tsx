// src/components/LandingPage.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion"; // Assuming framer-motion is installed for animations

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side - Main Content */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}
          <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://i.pinimg.com/736x/ac/1c/8a/ac1c8ab20d9736068b8f5ee2128d59da.jpg"
              alt="Meditation"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay Card */}
            <Card
              className="absolute bottom-10 right-10 w-72"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <CardContent className="p-6">
                <p className="text-5xl font-bold text-blue-300">240+</p>
                <p className="text-sm text-gray-200 mt-2 font-medium">
                  Souls finding peace and clarity every day
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Text Overlay */}
          <div
            className="absolute border p-4 top-10 left-10"
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <h1 className="text-6xl font-semibold leading-tight tracking-tight">
              Mindfulness <br />
              Brings <span className="text-teal-600">Calm</span> <br />& Meaning
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-5 h-5 rounded-full bg-teal-200 animate-pulse"></span>
              <span className="text-gray-700 font-medium">Meditation</span>
              <span className="w-5 h-5 rounded-full bg-lime-200 animate-pulse"></span>
              <span className="text-gray-700 font-medium">Mental Clarity</span>
            </div>
          </div>

          {/* Description and Buttons */}
          <div className="mt-8 max-w-lg ">
            <p className="text-gray-700 text-lg leading-relaxed">
              Discover a vibrant blend of yoga, meditation, and modern wellness
              techniques designed to spark harmony and inner peace.
            </p>
            <div className="flex gap-5 mt-8">
              <Button className="bg-gradient-to-r from-teal-500 to-lime-500 hover:from-teal-600 hover:to-lime-600 text-white rounded-full px-8 py-3 font-semibold shadow-md transition-all">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-teal-400 text-teal-600 hover:bg-teal-50 px-8 py-3 font-semibold transition-all"
              >
                Explore
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Offerings */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Your Journey Starts Here
          </h2>
          <p className="text-gray-700 text-lg mb-10 leading-relaxed">
            From beginners to seasoned practitioners, our thriving community
            empowers your path to well-being.
          </p>

          {/* Cards */}
          <div className="space-y-8">
            {/* Community Card */}
            <Card className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://i.pinimg.com/736x/d2/a2/81/d2a281e96ac97ac95acc9d665becf709.jpg"
                alt="Community"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-teal-200"></span>
                <span className="text-white font-semibold text-lg">
                  Community
                </span>
              </div>
              <CardContent className="absolute bottom-6 left-6 p-0">
                <p className="text-4xl font-bold text-white">240+</p>
                <p className="text-sm text-white/90 font-medium">
                  Join our vibrant tribe today
                </p>
              </CardContent>
            </Card>

            {/* Mental Health Card */}
            <Card className="flex items-center gap-5 p-5 bg-white/80 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-5 h-5 rounded-full bg-lime-200 animate-pulse"></div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Mental Health
                </p>
                <p className="text-sm text-gray-700">
                  Nurture your mind with expert support
                </p>
              </div>
            </Card>

            {/* Mindfulness Card */}
            <Card className="flex items-center gap-5 p-5 bg-white/80 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-5 h-5 rounded-full bg-teal-200 animate-pulse"></div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  Mindfulness
                </p>
                <p className="text-sm text-gray-700">
                  Stay grounded with daily practices
                </p>
              </div>
            </Card>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
