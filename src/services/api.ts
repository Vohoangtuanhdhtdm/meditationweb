import { LoginData, RegisterData, User } from "@/types/auth.type";
import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie"; // import js-cookie

const api: AxiosInstance = axios.create({
  baseURL: "https://localhost:7171/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm token từ cookie vào header nếu có
api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Lưu token vào cookie thay vì localStorage
export const login = async (data: LoginData) => {
  const response = await api.post("/Auth/login", data);
  Cookies.set("token", response.data.token, {
    expires: 7, // số ngày cookie tồn tại
    secure: true, // chỉ gửi qua HTTPS (có thể bỏ nếu đang dev localhost)
    sameSite: "Strict", // hoặc 'Lax' tuỳ nhu cầu
  });
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
};

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/user");
  return response.data;
};

export const getUserById = async (id: string): Promise<User> => {
  const response = await api.get(`/user/${id}`);
  return response.data;
};
