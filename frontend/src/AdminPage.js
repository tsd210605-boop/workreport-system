const role = localStorage.getItem("role");

if(role !== "ADMIN"){
window.location="/login"
}