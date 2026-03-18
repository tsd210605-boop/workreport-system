import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">QLCV SV</h2>
      <ul className="menu">
        <li>Dashboard</li>
        <li className="active">Thông tin cá nhân</li>
        <li>Lịch học</li>
        <li>Công việc</li>
        <li>Báo cáo</li>
        <li>Đăng xuất</li>
      </ul>
    </div>
  );
}

export default Sidebar;