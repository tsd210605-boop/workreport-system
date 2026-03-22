import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GiangVien() {
    const [giangViens, setGiangViens] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8081/api/giangvien")
            .then(res => res.json())
            .then(data => {
                console.log("DATA:", data);
                setGiangViens(Array.isArray(data) ? data : []);
            })
            .catch(error => console.log("ERROR:", error));
    }, []);

    return (
        <div>
            <h2>Danh sách giảng viên</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID Giảng Viên</th>
                        <th>User ID</th>
                        <th>Hoc Vi</th>
                        <th>Bộ Môn</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {giangViens.map(gv => (
                        <tr key={gv.giangVienID}>
                            <td>{gv.giangVienID}</td>
                            <td>{gv.userID}</td>
                            <td>{gv.hocVi}</td>
                            <td>{gv.boMon}</td>
                            <td>{gv.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GiangVien;