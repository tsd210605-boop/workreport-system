package com.example.workreport.model;

import jakarta.persistence.*;

@Entity
@Table(name = "SINH_VIEN")
public class SinhVien {

    @Id
    @Column(name = "SinhVienID")
    private String sinhVienID;

    @Column(name = "UserID")
    private String userID;

    @Column(name = "Khoa")
    private String khoa;

    @Column(name = "Lop")
    private String lop;

    @Column(name = "Email")
    private String email;

    public String getSinhVienID() {
        return sinhVienID;
    }

    public void setSinhVienID(String sinhVienID) {
        this.sinhVienID = sinhVienID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getKhoa() {
        return khoa;
    }

    public void setKhoa(String khoa) {
        this.khoa = khoa;
    }

    public String getLop() {
        return lop;
    }

    public void setLop(String lop) {
        this.lop = lop;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}