// src/pages/Profile.tsx
import { useEffect, useState } from "react";
import {
  api,
  DeleteUserById,
  getUserById,
  getUsers,
  logout,
} from "@/services/api";
import { User } from "@/types/auth.type";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";
import toast from "react-hot-toast";

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [deleteUserId, setDeleteUserId] = useState("");
  const navigate = useNavigate();

  const [isAdmin, setIsAdmin] = useState(false); // thêm state mới

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const roles = JSON.parse(
          decodeURIComponent(Cookies.get("roles") || "[]")
        );
        setIsAdmin(roles.includes("Admin")); // cập nhật đúng cách
        console.log("isAdmin", roles.includes("Admin"));

        const users = await getUsers();
        console.log("tất cả người dùng", users);
        const ctvs = await api.get("/CTV");
        console.log("tất cả ctv", ctvs);
        const Course = await api.get("/Course");
        console.log("tất cả khóa học", Course);

        const userId = Cookies.get("userId");
        if (!userId) {
          setError("Hãy đăng nhập để xem thông tin cá nhân");
          return;
        }
        const userData = await getUserById(userId);
        setUser(userData);
      } catch (err) {
        setError(`Failed to fetch profile ${err}`);
      }
    };

    fetchUser();
  }, []);

  const handleDeleteUserById = async () => {
    if (!deleteUserId) {
      toast("Vui lòng nhập ID người dùng cần xóa.");
      return;
    }

    const confirmDelete = window.confirm(
      `Bạn có chắc chắn muốn xóa người dùng với ID: ${deleteUserId}?`
    );
    if (!confirmDelete) return;

    try {
      await DeleteUserById(deleteUserId);
      toast("Xóa người dùng thành công!");
      if (deleteUserId === user?.id) {
        logout();
        navigate({ to: "/auth/login" });
      }
    } catch (err) {
      toast("Xóa người dùng thất bại.");
      console.error("Delete error:", err);
    }
  };

  const handleLogout = async () => {
    logout();
    navigate({ to: "/auth/login" });
  };

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  if (!user) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <div className="flex flex-col items-center space-y-4">
          {/* Avatar placeholder */}
          <div className="w-24 h-24 rounded-full bg-blue-200 flex items-center justify-center text-white text-2xl font-bold">
            {user.name?.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-2xl font-bold text-gray-800">
            Thông tin cá nhân
          </h1>
          <div className="text-gray-700 w-full space-y-2">
            <p>
              <span className="font-medium">Tên người dùng:</span> {user.name}
            </p>
            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>
            {/* <p><span className="font-medium">Vai trò:</span> {user.role}</p> */}
          </div>
          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-xl transition duration-200"
          >
            Đăng xuất
          </button>
          {isAdmin && (
            <div>
              <button
                onClick={() => navigate({ to: "/admin/dashboard" })}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-xl transition duration-200"
              >
                Đến trang Admin
              </button>

              <div className="w-full mt-4 space-y-2">
                <input
                  type="text"
                  placeholder="Nhập ID người dùng cần xóa"
                  value={deleteUserId}
                  onChange={(e) => setDeleteUserId(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  onClick={handleDeleteUserById}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                >
                  Xóa người dùng theo ID
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
