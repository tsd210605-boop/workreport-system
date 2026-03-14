import { useEffect } from "react";

function GiangVienDashboard(){

useEffect(()=>{

const role = localStorage.getItem("role");

if(role !== "GIANG_VIEN"){
window.location="/login"
}

},[])

return(
<h1>Trang Giảng Viên</h1>
)

}

export default GiangVienDashboard;