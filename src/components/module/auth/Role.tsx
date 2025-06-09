import { assignRole, getUsers } from "@/services/api";
import { userRole } from "@/types/userRole";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Role = () => {
  const [allUsers, setAllUsers] = useState<userRole[]>();
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const roles = JSON.parse(
          decodeURIComponent(Cookies.get("roles") || "[]")
        );
        const users = await getUsers();
        setAllUsers(users);
      } catch (err) {
        toast.error(`Không thể tải danh sách người dùng. ${err}`);
      }
    };

    fetchUser();
  }, []);

  const handleAssignRole = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUserId || !selectedRole) {
      toast.error("Vui lòng chọn người dùng và vai trò!");
      return;
    }

    try {
      await assignRole(selectedUserId, selectedRole);
      toast.success("Gán vai trò thành công!");

      const updatedUsers = await getUsers();
      setAllUsers(updatedUsers);
      setSelectedUserId("");
      setSelectedRole("");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Cấp quyền truy cập cho người dùng
      </h2>

      <form onSubmit={handleAssignRole} className="space-y-6">
        {/* Chọn người dùng */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chọn người dùng
          </label>
          <select
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Chọn người dùng --</option>
            {(allUsers ?? []).map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
        </div>

        {/* Chọn vai trò */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chọn vai trò
          </label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Chọn vai trò --</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>

        {/* Nút Gán Vai Trò */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-full transition-all duration-200"
          >
            Gán vai trò
          </button>
        </div>
      </form>
    </div>
  );
};
