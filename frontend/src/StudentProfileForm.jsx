import React, { useState } from "react";

function StudentProfileForm() {
  const [isEditing, setIsEditing] = useState(false);

  const [studentInfo, setStudentInfo] = useState({
    maSinhVien: "SV001",
    hoTen: "Nguyễn Văn A",
    ngaySinh: "2003-05-10",
    gioiTinh: "Nam",
    email: "nguyenvana@example.com",
    soDienThoai: "0123456789",
    diaChi: "Hà Nội",
    lop: "CNTT K15",
    nganh: "Công nghệ thông tin",
    khoa: "Khoa CNTT",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentInfo({
      ...studentInfo,
      [name]: value,
    });
  };

  const handleSave = () => {
    alert("Lưu thông tin thành công!");
    setIsEditing(false);

    // Sau này chỗ này gọi API update
    // axios.put("http://localhost:8080/api/students/update", studentInfo)
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="avatar-section">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="avatar"
            className="avatar"
          />
          <button className="change-avatar-btn">Đổi ảnh</button>
        </div>

        <div className="info-section">
          <div className="form-grid">
            <div className="form-group">
              <label>Mã sinh viên</label>
              <input
                type="text"
                name="maSinhVien"
                value={studentInfo.maSinhVien}
                disabled
              />
            </div>

            <div className="form-group">
              <label>Họ và tên</label>
              <input
                type="text"
                name="hoTen"
                value={studentInfo.hoTen}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Ngày sinh</label>
              <input
                type="date"
                name="ngaySinh"
                value={studentInfo.ngaySinh}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Giới tính</label>
              <select
                name="gioiTinh"
                value={studentInfo.gioiTinh}
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Khác">Khác</option>
              </select>
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={studentInfo.email}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Số điện thoại</label>
              <input
                type="text"
                name="soDienThoai"
                value={studentInfo.soDienThoai}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group full-width">
              <label>Địa chỉ</label>
              <input
                type="text"
                name="diaChi"
                value={studentInfo.diaChi}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Lớp</label>
              <input type="text" value={studentInfo.lop} disabled />
            </div>

            <div className="form-group">
              <label>Ngành</label>
              <input type="text" value={studentInfo.nganh} disabled />
            </div>

            <div className="form-group">
              <label>Khoa</label>
              <input type="text" value={studentInfo.khoa} disabled />
            </div>
          </div>

          <div className="button-group">
            {!isEditing ? (
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                Chỉnh sửa
              </button>
            ) : (
              <>
                <button className="save-btn" onClick={handleSave}>
                  Lưu
                </button>
                <button className="cancel-btn" onClick={handleCancel}>
                  Hủy
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfileForm;