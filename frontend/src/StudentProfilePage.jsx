import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import StudentProfileForm from "./StudentProfileForm";

function StudentProfilePage() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Header title="Thông tin cá nhân sinh viên" />
        <div className="page-content">
          <StudentProfileForm />
        </div>
      </div>
    </div>
  );
}

export default StudentProfilePage;