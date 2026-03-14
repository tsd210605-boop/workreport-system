import { useEffect } from "react";

function SinhVienDashboard() {
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "SINH_VIEN") {
      window.location = "/login";
    }
  }, []);

  return (
    <h1>Trang Sinh Viên</h1>
  );

}

export default SinhVienDashboard;  