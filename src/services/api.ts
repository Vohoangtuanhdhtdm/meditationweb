import { LoginData, RegisterData, User } from "@/types/auth.type";
import { DecodedToken } from "@/types/DecodedToken";
import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie"; // import js-cookie
import { jwtDecode } from "jwt-decode"; // Thêm jwt-decode để giải mã token

export const api: AxiosInstance = axios.create({
  baseURL: "https://localhost:7171/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Đọc roles từ cookie (làm mới khi token thay đổi)
export const getRolesFromToken = (token: string): string[] => {
  try {
    const decoded: DecodedToken = jwtDecode(token);
    const roles =
      decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    return Array.isArray(roles) ? roles : roles ? [roles] : [];
  } catch (error) {
    console.error("Error decoding token to get roles:", error);
    return [];
  }
};

// Thêm token từ cookie vào header nếu có
api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Lưu token vào cookie
export const login = async (data: LoginData) => {
  const response = await api.post("/Auth/login", data);
  console.log("response", response.data);
  Cookies.set("token", response.data.token, {
    expires: 7, // số ngày cookie tồn tại
    secure: true, // chỉ gửi qua HTTPS (có thể bỏ nếu đang dev localhost)
    sameSite: "Strict", // hoặc 'Lax' tuỳ nhu cầu
  });

  // Giải mã token để lấy roles và lưu vào cookie
  const roles = getRolesFromToken(response.data.token);
  Cookies.set("roles", JSON.stringify(roles));

  Cookies.set("userId", response.data.userId);
  return response.data;
};

// Các API khác giữ nguyên
export const register = async (data: RegisterData) => {
  const response = await api.post("/Auth/register", data);
  return response.data;
};

// Đăng xuất
export const logout = () => {
  Cookies.remove("token");
  Cookies.remove("userId");
  Cookies.remove("roles");
};

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/User");
  return response.data;
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await api.get(`/User/${id}`);
  return response.data;
};

export const DeleteUserById = async (id: string): Promise<User> => {
  const response = await api.delete(`/User/${id}`);
  return response.data;
};

// Gán vai trò (chỉ Admin)
export const assignRole = async (
  userId: string,
  role: string
): Promise<void> => {
  try {
    await api.post("/auth/assign-role", { userId, role });
  } catch (error) {
    throw new Error("Lỗi khi gán vai trò: " + (error as Error).message);
  }
};
