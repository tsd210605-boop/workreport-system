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
</div>
)

}

export default AdminDashboard;