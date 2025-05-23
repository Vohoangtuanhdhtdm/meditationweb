import React, { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { LoginData } from "@/types/auth.type";
import { login } from "@/services/api";
import { FaUser, FaLock } from "react-icons/fa";
import toast from "react-hot-toast";

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginData>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData);
      toast.success("Đăng nhập thành công!");
      navigate({ to: "/" });
    } catch (err) {
      setError("Sai tên đăng nhập hoặc mật khẩu");
      toast.error(`Đăng nhập thất bại! ${err} `);
    }
  };

  const handleGoogleLogin = () => {
    const redirectUrl = "http://localhost:5173/auth/callback";
    window.location.href = `https://localhost:7171/api/auth/external-login/Google?returnUrl=${encodeURIComponent(redirectUrl)}`;
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
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm space-y-4"
      >
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User name
          </label>
          <div className="relative">
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              type="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
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
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
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

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        {/* Nút đăng nhập bằng Google */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-full hover:bg-gray-100 transition"
        >
          <img
            src="https://i.pinimg.com/736x/60/41/99/604199df880fb029291ddd7c382e828b.jpg"
            alt="Google logo"
            className="w-8 h-8 object-cover"
          />
          <span className="text-sm text-gray-700 font-medium">
            Sign in with Google
          </span>
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
    </div>
  );
};

export default Login;
