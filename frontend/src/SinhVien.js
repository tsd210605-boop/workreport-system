import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SinhVien() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8081/api/sinhvien")
      .then(res => res.json())
      .then(data => {
        console.log("DATA:", data);
        // Đảm bảo data luôn là array
        setStudents(Array.isArray(data) ? data : []);
      })
      .catch(error => console.log("ERROR:", error));
  }, []);

  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID Sinh Viên</th>
            <th>User ID</th>
            <th>Khoa</th>
            <th>Lớp</th>
            <th>Email</th>
            <th>Nhóm</th>
          </tr>
        </thead>
        <tbody>
          {students.map(sv => (
            <tr key={sv.sinhVienID}>
              <td>{sv.sinhVienID}</td>
              <td>{sv.userID}</td>
              <td>{sv.khoa}</td>
              <td>{sv.lop}</td>
              <td>{sv.email}</td>
              <td>
                <button onClick={() => navigate(`/sinhvien/${sv.sinhVienID}/nhom`)}>
                  Xem nhóm
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SinhVien;