import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import SinhVien from "./SinhVien";
import NhomSinhVien from "./NhomSInhVien";
import AdminDashboard from "./AdminDashboard";
import GiangVienDashboard from "./GiangVienDashboard";
import SinhVienDashboard from "./SinhVienDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/giangvien" element={<GiangVienDashboard />} />
        <Route path="/sinhvien" element={<SinhVienDashboard />} />

        {/* ← Thêm dòng này */}
        <Route path="/danhsach" element={<SinhVien />} />

        <Route path="/sinhvien/:sinhVienID/nhom" element={<NhomSinhVien />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;