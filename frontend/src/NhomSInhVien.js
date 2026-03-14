import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function NhomSinhVien() {
  const { sinhVienID } = useParams();
  const navigate = useNavigate();
  const [nhoms, setNhoms] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/api/sinhvien/${sinhVienID}/nhom`)
      .then(res => res.json())
      .then(data => setNhoms(data))
      .catch(error => console.log("ERROR:", error));
  }, [sinhVienID]);

  return (
    <div>
      <button onClick={() => navigate("/")}>← Quay lại</button>
      <h2>Danh sách nhóm của sinh viên: {sinhVienID}</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nhóm ID</th>
            <th>Tên Nhóm</th>
            <th>Trưởng Nhóm</th>
            <th>Lớp ID</th>
          </tr>
        </thead>
        <tbody>
          {nhoms.map(nhom => (
            <tr key={nhom.nhomID}>
              <td>{nhom.nhomID}</td>
              <td>{nhom.tenNhom}</td>
              <td>{nhom.truongNhom}</td>
              <td>{nhom.lopID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NhomSinhVien;