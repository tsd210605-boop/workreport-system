package com.example.workreport.model;

import jakarta.persistence.*;

@Entity
@Table(name = "GIANG_VIEN")

public class GiangVien {
    @Id
    @Column(name = "GiangVienID")
    private String giangVienID;

    @Column(name = "UserID")
    private String userID;

    @Column(name = "HocVi")
    private String hocVi;

    @Column(name = "BoMon")
    private String boMon;

    @Column(name = "Email")
    private String email;

    public String getGiangVienID() {
        return giangVienID;
    }

    public void setGiangVienID(String giangVienID) {
        this.giangVienID = giangVienID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getHocVi() {
        return hocVi;
    }

    public void setHocVi(String hocVi) {
        this.hocVi = hocVi;
    }

    public String getBoMon(){
        return boMon;
    }

    public void setBoMon(String boMon){
        this.boMon = boMon;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    
}
