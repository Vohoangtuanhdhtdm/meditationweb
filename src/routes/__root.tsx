import { Button } from "@/components/ui/button";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { motion } from "framer-motion";
import { Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react";



export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-lime-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 bg-gradient-to-r from-teal-500 to-lime-500 rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Presence
          </span>
        </div>
        <nav className="flex items-center gap-6">
          <Button
            variant="ghost"
            className="text-teal-600 font-semibold hover:text-teal-800 transition-colors"
          >
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-teal-600 transition-colors"
          >
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </Button>
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-teal-600 transition-colors"
          >
            <Link to="/posts" className="[&.active]:font-bold">
              Post
            </Link>
          </Button>

          <Link to="/plan/PlanPage" className="block">
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-teal-600 transition-colors"
          >
            Plan
          </Button>
          </Link>

          <Link to="/Sign/Signin" className="block">
          <Button
            variant="ghost"
            className="text-gray-700 hover:text-teal-600 transition-colors"
          >
            Sign In
          </Button>
          </Link>

          <Link to="/Sign/Signup" className="block">  
          <Button className="bg-gradient-to-r from-teal-500 to-lime-500 hover:from-teal-600 hover:to-lime-600 text-white rounded-full px-6 shadow-lg transition-all">
            Sign Up
          </Button>
          </Link>
        </nav>
      </header>

      <hr />
      <div>
        <Outlet />
      </div>
      

      <footer className="mt-16 bg-gradient-to-br from-lime-100 to-teal-600 text-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-base">
          {/* Logo + Mô tả */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4 text-teal-800">Presence</h2>
            <p className="text-gray-700 font-medium">
              🌿 Breathe, relax, and explore mindfulness.<br />
              Your journey to peace starts here.
            </p>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 font-semibold">
              <li><Link to="/" className="hover:text-white transition-colors"> Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors"> About</Link></li>
              <li><Link to="/posts" className="hover:text-white transition-colors"> Posts</Link></li>
              <li><Link to="/discipline" className="hover:text-white transition-colors"> Meditation</Link></li>
            </ul>
          </div>

          {/* Thông tin liên hệ + mạng xã hội */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-gray-900">Contact Us</h3>
            <div className="flex items-center gap-2 text-gray-800 mb-2">
              <Mail className="w-5 h-5" />
              <span className="font-medium">hello@presence.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800 mb-4">
              <Phone className="w-5 h-5" />
              <span className="font-medium">+84 123 456 789</span>
            </div>

            <div className="flex gap-4">
              <a href="#" className="hover:text-white"><Facebook /></a>
              <a href="#" className="hover:text-white"><Instagram /></a>
              <a href="#" className="hover:text-white"><Twitter /></a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-700 font-semibold mt-10">
          © {new Date().getFullYear()} Presence. All rights reserved.
        </div>
      </footer>

      <TanStackRouterDevtools />
    </div>
  ),

}); 