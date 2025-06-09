import { DeleteUserById, getUsers, logout } from "@/services/api";
import { User } from "@/types/auth.type";
import { useNavigate } from "@tanstack/react-router";
import Cookies from "js-cookie";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Manage_User = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState<string | null>(null);

  // Load danh sách người dùng
  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      setError(`Lỗi tải người dùng: ${err}`);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(`Xác nhận xóa người dùng ${id}?`);
    if (!confirmDelete) return;

    try {
      await DeleteUserById(id);
      toast.success("Đã xóa người dùng!");
      fetchUsers();

      // Nếu xóa chính mình → đăng xuất
      const currentUserId = Cookies.get("userId");
      if (currentUserId === id) {
        logout();
        navigate({ to: "/auth/login" });
      }
    } catch (err) {
      toast.error(`Lỗi khi xóa: ${err}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 space-y-6">
      <h2 className="text-xl font-bold">Quản lý người dùng</h2>

      {/* DANH SÁCH NGƯỜI DÙNG */}
      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded-md flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleDelete(user.id)}
                className="text-red-600 hover:underline"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ERROR */}
      {error && (
        <div className="text-red-600 font-medium text-center">{error}</div>
      )}
    </div>
  );
};
