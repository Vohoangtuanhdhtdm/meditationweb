import { useState } from "react";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Sign/Signup")({
  component: Signup,
});

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-red-500"></div>
        <h1 className="text-xl font-bold text-gray-800">Meditation</h1>
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Create your account
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSignup}
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your name
          </label>
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your email
          </label>
          <div className="relative">
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Create password
          </label>
          <div className="relative">
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              type="password"
              placeholder="Choose a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 rounded-full shadow-md hover:opacity-90 transition"
        >
          Sign up
        </button>

        <div className="text-sm mt-2 text-center">
          Already have an account?{" "}
          <a href="/sign/signin" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </div>
      </form>
    </div>
  );
}