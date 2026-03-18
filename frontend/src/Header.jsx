import React from "react";

function Header({ title }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="user-box">
        <span>Xin chào, Sinh viên</span>
      </div>
    </div>
  );
}

export default Header;