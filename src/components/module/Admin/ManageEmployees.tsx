import { CTVDto, PositionDto } from "@/types/ctv.type";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import toast from "react-hot-toast";
import { api } from "@/services/api";

const ManageEmployees = () => {
  //   const navigate = useNavigate();
  const [ctv, setCtv] = useState({ name: "", userId: "", positionId: "" });
  const [position, setPosition] = useState({ name: "" });

  const [ctvs, setCtvs] = useState<CTVDto[]>([]);
  const [positions, setPositions] = useState<PositionDto[]>([]);
  const [users, setUsers] = useState<{ id: string; name: string }[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch CTVs and Positions
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/User");
        setUsers(response.data); // đảm bảo API trả về list dạng { id, name }
      } catch (error) {
        toast.error(`Failed to fetch users: ${error}`);
      }
    };
    const fetchCtvs = async () => {
      try {
        const response = await api.get("/CTV");
        setCtvs(response.data);
      } catch (error) {
        toast.error(`Failed to fetch CTVs ${error}`);
      }
    };
    const fetchPositions = async () => {
      try {
        const response = await api.get("/Position");
        setPositions(response.data);
      } catch (error) {
        toast.error(`Failed to fetch positions ${error}`);
      }
    };
    fetchUsers();
    fetchCtvs();
    fetchPositions();
  }, []);

  const handleCreateCtv = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/CTV", JSON.stringify(ctv));
      const newCtv = response.data;
      setCtvs([...ctvs, newCtv]);
      toast.success("Tạo cộng tác viên thành công");
    } catch (error) {
      toast.error(`Failed to create CTV ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePosition = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/Position", JSON.stringify(position));
      const newPosition = response.data;
      setPositions([...positions, newPosition]);
      toast.success("Tạo ví trí thành công");
    } catch (error) {
      toast.error(`Failed to create position ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Quản lý nhân viên</h1>
      <Separator />

      {/* CTV Form */}
      <Card>
        <CardHeader>
          <CardTitle>Tạo cộng tác viên</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateCtv} className="space-y-4">
            <Input
              placeholder="Tên cộng tác viên"
              value={ctv.name}
              onChange={(e) => setCtv({ ...ctv, name: e.target.value })}
              required
            />
            <Select
              onValueChange={(value) => setCtv({ ...ctv, userId: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn người dùng" />
              </SelectTrigger>
              <SelectContent>
                {users.map((user) => (
                  <SelectItem key={user.id} value={user.id}>
                    {user.name} ({user.id})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={(value) => setCtv({ ...ctv, positionId: value })}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn vị trí" />
              </SelectTrigger>
              <SelectContent>
                {positions.map((pos) => (
                  <SelectItem key={pos.id} value={pos.id}>
                    {pos.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button type="submit" disabled={loading}>
              {loading ? "Đang tạo..." : "Tạo cộng tác viên"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Position Form */}
      <Card>
        <CardHeader>
          <CardTitle>Tạo vị trí</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreatePosition} className="space-y-4">
            <Input
              placeholder="Tên vị trí"
              value={position.name}
              onChange={(e) =>
                setPosition({ ...position, name: e.target.value })
              }
              required
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Đang tạo..." : "Tạo vị trí"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* CTV List */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách cộng tác viên</CardTitle>
        </CardHeader>
        <CardContent>
          {ctvs.map((ctv) => (
            <div
              key={ctv.id}
              className="flex justify-between items-center py-2"
            >
              <span>
                {ctv.name} ({ctv.userId})
              </span>
              <div>
                <Button
                  variant="outline"
                  className="mr-2"
                  //onClick={() => navigate(`/employees/edit/${ctv.id}`)}
                >
                  Sửa
                </Button>
                <Button
                  variant="destructive"
                  //   onClick={async () => {
                  //     try {
                  //       await fetch(`http://localhost:5000/api/CTV/${ctv.id}`, {
                  //         method: "DELETE",
                  //         headers: { Authorization: `Bearer YOUR_JWT_TOKEN` },
                  //       });
                  //       setCtvs(ctvs.filter((c) => c.id !== ctv.id));
                  //       toast.success("CTV deleted successfully");
                  //     } catch (error) {
                  //       toast.error(`Failed to delete CTV ${error}`);
                  //     }
                  //   }}
                >
                  Xóa
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Position List */}
      <Card>
        <CardHeader>
          <CardTitle>Danh sách vị trí</CardTitle>
        </CardHeader>
        <CardContent>
          {positions.map((pos) => (
            <div
              key={pos.id}
              className="flex justify-between items-center py-2"
            >
              <span>{pos.name}</span>
              <div>
                <Button
                  variant="outline"
                  className="mr-2"
                  //   onClick={() => navigate(`/positions/edit/${pos.id}`)}
                >
                  Sửa
                </Button>
                <Button
                  variant="destructive"
                  //   onClick={async () => {
                  //     try {
                  //       await fetch(
                  //         `http://localhost:5000/api/Position/${pos.id}`,
                  //         {
                  //           method: "DELETE",
                  //           headers: { Authorization: `Bearer YOUR_JWT_TOKEN` },
                  //         }
                  //       );
                  //       setPositions(positions.filter((p) => p.id !== pos.id));
                  //       toast.success("Position deleted successfully");
                  //     } catch (error) {
                  //       toast.error(`Failed to delete position ${error}`);
                  //     }
                  //   }}
                >
                  Xóa
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageEmployees;
