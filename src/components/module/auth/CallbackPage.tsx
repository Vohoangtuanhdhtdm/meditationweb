import { getRolesFromToken } from "@/services/api";
import { useNavigate } from "@tanstack/react-router";
import Cookies from "js-cookie";
import { useEffect } from "react";
import toast from "react-hot-toast";

const CallbackPage = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    console.log("Search params:", window.location.search);
    const token = searchParams.get("token");
    const userId = searchParams.get("userId");

    if (token && userId) {
      Cookies.set("token", token, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
      // Giải mã token để lấy roles và lưu vào cookie
      const roles = getRolesFromToken(token);
      Cookies.set("roles", JSON.stringify(roles));
      Cookies.set("userId", userId);
      toast.success("Đăng nhập bằng Google thành công!");
      navigate({ to: "/" });
    } else {
      console.error("Missing token or userId");
      toast.error("Đăng nhập bằng Google thất bại!");
      navigate({ to: "/auth/login" });
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default CallbackPage;
