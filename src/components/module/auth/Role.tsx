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
        console.log("roles", roles.includes("User")); // Kiểm tra có phải là User không
        const users = await getUsers();
        setAllUsers(users);
      } catch (err) {
        toast.error(`Failed to fetch profile ${err}`);
      }
    };

    fetchUser();
  }, []);

  // Xử lý gán vai trò
  const handleAssignRole = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUserId || !selectedRole) {
      toast.error("Vui lòng chọn người dùng và vai trò!");
      return;
    }

    try {
      console.log("selectedUserId", selectedUserId);
      console.log("selectedRole", selectedRole);
      await assignRole(selectedUserId, selectedRole); // api
      toast.success("Gán vai trò thành công!");
      // Cập nhật lại danh sách người dùng
      const updatedUsers = await getUsers();
      setAllUsers(updatedUsers);
      setSelectedUserId("");
      setSelectedRole("");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <form onSubmit={handleAssignRole} className="space-y-4">
        <div>
          {/* Chọn người dùng */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Chọn người dùng
            </label>
            <select
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Chọn vai trò
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="">-- Chọn vai trò --</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          {/* Nút gán vai trò */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 rounded-full hover:bg-blue-600 transition"
            >
              Gán vai trò
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
