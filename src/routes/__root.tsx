import { Button } from "@/components/ui/button";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { motion } from "framer-motion";

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

          <Button
            variant="ghost"
            className="text-gray-700 hover:text-teal-600 transition-colors"
          >
            Login
          </Button>
          <Button className="bg-gradient-to-r from-teal-500 to-lime-500 hover:from-teal-600 hover:to-lime-600 text-white rounded-full px-6 shadow-lg transition-all">
            Sign In
          </Button>
        </nav>
      </header>

      <hr />
      <div>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
