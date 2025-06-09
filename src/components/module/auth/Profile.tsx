import { useEffect, useState } from "react";
import { getUserById, logout } from "@/services/api";
import { User } from "@/types/auth.type";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";

import { UserCircle, LogOut, ShieldCheck } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const roles = JSON.parse(
          decodeURIComponent(Cookies.get("roles") || "[]")
        );
        setIsAdmin(roles.includes("Admin"));

        const userId = Cookies.get("userId");
        if (!userId) {
          setError("Hãy đăng nhập để xem thông tin cá nhân");
          return;
        }

        const userData = await getUserById(userId);
        setUser(userData);
      } catch (err) {
        setError(`Không thể tải thông tin người dùng. ${err}`);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    logout();
    navigate({ to: "/auth/login" });
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 text-lg">
        {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Đang tải thông tin...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-tr from-sky-100 via-green-100 to-blue-100 p-6 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 space-y-6">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            {user.name?.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Thông tin cá nhân
          </h2>
        </div>

        <div className="space-y-3 text-gray-700">
          <p className="flex items-center gap-2">
            <UserCircle className="w-5 h-5 text-blue-500" />
            <span>
              <span className="font-medium">Tên:</span> {user.name}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            <span>
              <span className="font-medium">Email:</span> {user.email}
            </span>
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl flex items-center justify-center gap-2 transition"
        >
          <LogOut className="w-4 h-4" />
          Đăng xuất
        </button>

        {isAdmin && (
          <div className="mt-6 border-t pt-4 space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Quản trị viên
            </h3>
            <button
              onClick={() => navigate({ to: "/admin/dashboard" })}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl transition"
            >
              Đi đến trang Admin
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
