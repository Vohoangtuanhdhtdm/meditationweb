// src/components/LandingPage.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion"; // Assuming framer-motion is installed for animations
import { Link } from "@tanstack/react-router";

const LandingPage  = () => {
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
          <Link to="/discipline" className="block">
            <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
              <img
                src="https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19487279/moral_obligation_to_meditate_GettyImages_1142935168.jpg?quality=90&strip=all&crop=0%2C0.059218318199768%2C100%2C99.8815633636&w=1920"
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
            ARE WE <br />
            MORALLY <span className="text-teal-600">OBLIGATED</span> <br />TO MEDITATE?
            </h1>
            <div className="flex items-center gap-3 mt-6">
              <span className="w-5 h-5 rounded-full bg-teal-200 animate-pulse"></span>
              <span className="text-gray-700 font-medium">Meditation</span>
              <span className="w-5 h-5 rounded-full bg-lime-200 animate-pulse"></span>
              <span className="text-gray-700 font-medium">Mental Clarity</span>
            </div>
          </div>
          </Link>
          {/* Description and Buttons */}
          <div className="mt-8 max-w-lg ">
            <Link to="/discipline" className="block"> 
            <p className="text-gray-700 text-lg leading-relaxed">
            What are meditation and mindfulness?
            </p>
            </Link>
            <p className="text-gray-700 text-lg leading-relaxed">
            Are meditation and mindfulness practices safe?
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
            How popular are meditation and mindfulness?
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
            Why do people practice mindfulness meditation?
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
            How To Meditate?
            </h2>
            <p className="text-gray-700 text-lg mb-10 leading-relaxed">
            A simple meditation practice could make you healthier.
            </p>
           
              {/* Cards */}
              <div className="space-y-8">
              <Link to="/meditate" className="block"> 
                {/* Community Card */}
                <Card className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src="https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_2.0,f_auto,g_faces:auto,q_auto:eco,w_1400/v1/yms/prod/7ac24345-1a6b-4a88-8dcd-fdfbf34a9ad6"
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
                    <p className="text-4xl font-bold text-white">Family Health</p>
                    <p className="text-sm text-white/90 font-medium">
                      BY KATHY KATELLA November 29, 2022
                    </p>
                  </CardContent>
                </Card>
              </Link>
            {/* Mental Health Card */}
            <Link to="/dmt" className="block"> 
            <Card
              className="flex items-center gap-5 p-6 bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl
                        hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98]
                        transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-lime-200 animate-pulse"></div>
              <div>
                <p className="font-semibold text-gray-900 text-lg ">
                What is DMT meditation? Exploring the benefits and risks
                </p>
                <p className="text-sm text-gray-700">
                It’s crucial to ask oneself, “What is DMT meditation?” to associate with its benefits and risks.   
                </p>
              </div>
            </Card>
            </Link>

            {/* Mindfulness Card */}
            <Card
              className="flex items-center gap-5 p-6 bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl
                        hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98]
                        transition-all duration-300 ease-in-out cursor-pointer"
            >
                <div className="w-5 h-5 rounded-full bg-lime-400 animate-pulse"></div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                How to meditate for beginners?
                </p>
                <p className="text-sm text-gray-700">
                Meditation is not mystical – it's simply a way for us to stop for a moment and be calm.
                </p>
              </div>
            </Card>

            <Card
              className="flex items-center gap-5 p-6 bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl
                        hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98]
                        transition-all duration-300 ease-in-out cursor-pointer"
            >
               <div className="w-10 h-5 rounded-full bg-lime-600 animate-pulse"></div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                How Meditation Benefits Your Mind and Body
                </p>
                <p className="text-sm text-gray-700">
                While meditation is well known as a technique to reduce stress and anxiety, it may also help enhance your mood, promote healthy sleep patterns, and boost cognitive skills.
                </p>
              </div>
            </Card>

            <Card
              className="flex items-center gap-5 p-6 bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl
                        hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98]
                        transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="w-8 h-5 rounded-full bg-lime-800 animate-pulse"></div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                Meditation and Mindfulness: Effectiveness and Safety
                </p>
                <p className="text-sm text-gray-700">
                Meditation has a history that goes back thousands of years, and many meditative techniques began in Eastern traditions. 
                </p>
              </div>
            </Card>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage ;