import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "@tanstack/react-router";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Chức năng của Admin</h1>
      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Quản lý nhân viên</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Xem, chỉnh sửa hoặc xoá người dùng trong hệ thống.
            </p>
            <Button
              onClick={() => navigate({ to: "/admin/create_ctv" })}
              variant="default"
            >
              Truy cập
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Phân quyền</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Gán vai trò (role) cho người dùng như User, Editor, Admin.
            </p>
            <Button
              onClick={() => navigate({ to: "/admin/Assign_role" })}
              variant="default"
            >
              Truy cập
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tạo khóa học mới</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Xem số lượng người dùng, bài viết, lượt truy cập,...
            </p>
            <Button
              onClick={() => navigate({ to: "/admin/create_course" })}
              variant="default"
            >
              Truy cập
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quản lý người dùng</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Thay đổi cài đặt ứng dụng, giao diện, thông báo,...
            </p>
            <Button
              onClick={() => navigate({ to: "/admin/manage_user" })}
              variant="default"
            >
              Truy cập
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
