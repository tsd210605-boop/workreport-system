import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MonHoc() {
    const [monHocs, setMonHocs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8081/api/monhoc")
            .then(res => res.json())
            .then(data => {
                console.log("DATA:", data);
                setMonHocs(Array.isArray(data) ? data : []);
            })
            .catch(error => console.log("ERROR:", error));
    }, []);
    return (
        <div>
            <h2>Danh sách môn học</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Mã môn học</th>
                        <th>Tên môn học</th>
                        <th>Mô tả</th>
                        <th>Số tín chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    {monHocs.map(mh => (
                        <tr key={mh.monHocID}>
                            <td>{mh.monHocID}</td>
                            <td>{mh.tenMonHoc}</td>
                            <td>{mh.moTa}</td>
                            <td>{mh.soTinChi}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default MonHoc;