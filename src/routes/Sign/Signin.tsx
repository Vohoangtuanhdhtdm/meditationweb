// src/routes/sign/signin.tsx

import { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { createFileRoute } from "@tanstack/react-router"; // Thêm để khai báo route

// Khai báo route để TanStack Router nhận diện file này là một route
export const Route = createFileRoute("/Sign/Signin")({
  component: Signin,
});

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="min-h-screen bg-green-10 text-black p-10 relative flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-500 via-pink-400 to-red-500"></div>
        <h1 className="text-xl font-bold text-gray-800">Meditation</h1>
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Good to see you again
      </h2>

      {/* Form */}
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your email
          </label>
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              placeholder=".@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your password
          </label>
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 rounded-full shadow-md hover:opacity-90 transition"
        >
          Sign in
        </button>

        <div className="flex justify-between text-sm mt-2">
          <a href="#" className="text-blue-600 hover:underline">
            Don't have an account?
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </form>

      {/* Footer icons */}
      <div className="flex gap-6 mt-10 text-xs text-gray-700">
        <span className="flex items-center gap-1">
          <div className="w-3 h-3 bg-yellow-400 rounded-full" />
          KWFinder
        </span>
        <span className="flex items-center gap-1">
          <div className="w-3 h-3 bg-yellow-300 rounded-full" />
          SERPChecker
        </span>
        <span className="flex items-center gap-1">
          <div className="w-3 h-3 bg-purple-400 rounded-full" />
          SERPWatcher
        </span>
        <span className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-400 rounded-full" />
          LinkMiner
        </span>
        <span className="flex items-center gap-1">
          <div className="w-3 h-3 bg-pink-400 rounded-full" />
          SiteProfiler
        </span>
      </div>
    </div>
  );
}