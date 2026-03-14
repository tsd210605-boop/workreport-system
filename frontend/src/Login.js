import { useState } from "react";
import axios from "axios";

function Login(){

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

const handleLogin = async () =>{

try{

const res = await axios.post("http://localhost:8081/api/login",{
username:username,
password:password
})

const user = res.data;

localStorage.setItem("role",user.role);

if(user.role === "ADMIN"){
window.location="/admin"
}
else if(user.role==="GIANG_VIEN"){
window.location="/giangvien"
}
else if(user.role==="SINH_VIEN"){
window.location="/sinhvien"
}

}catch(error){

alert("Sai tài khoản hoặc lỗi server");

}

}

return(

<div>

<h2>Login</h2>

<input
placeholder="username"
onChange={(e)=>setUsername(e.target.value)}
/>

<br/>

<input
type="password"
placeholder="password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/>

<button onClick={handleLogin}>
Login
</button>

</div>

)

}

export default Login;