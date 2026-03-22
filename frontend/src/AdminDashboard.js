import { useEffect } from "react";
import{ Link } from "react-router-dom";

function AdminDashboard(){

useEffect(()=>{

const role = localStorage.getItem("role");

if(role !== "ADMIN"){
window.location="/login"
}

},[])

return(
    <div>
<h1>Trang Admin</h1>
<Link to ="/danhsach">Danh sách sinh viên</Link>
<br/>
<Link to = "/danhsachgiangvien">Danh sách giảng viên</Link>
<br/>
<Link to = "/danhsachmonhoc">Danh sách môn học</Link>
</div>
)

}

export default AdminDashboard;