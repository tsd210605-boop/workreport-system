import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import SinhVien from "./SinhVien";
import NhomSinhVien from "./NhomSInhVien";
import AdminDashboard from "./AdminDashboard";
import GiangVien from "./GiangVien";
import GiangVienDashboard from "./GiangVienDashboard";
import SinhVienDashboard from "./SinhVienDashboard";
import ExerciseList from "./Exerciselist";
import StudentProfilePage from "./StudentProfilePage";
import MonHoc from "./MonHoc";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/giangvien" element={<GiangVienDashboard />} />
        <Route path="/sinhvien" element={<SinhVienDashboard />} />

   
        <Route path="/danhsach" element={<SinhVien />} />
        <Route path="/danhsachgiangvien" element={<GiangVien />} />
        <Route path="/danhsachmonhoc" element={<MonHoc />} />

        <Route path="/sinhvien/:sinhVienID/nhom" element={<NhomSinhVien />} />
         <Route path="/exercises" element={<ExerciseList />} />
        <Route path="/profile" element={<StudentProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;