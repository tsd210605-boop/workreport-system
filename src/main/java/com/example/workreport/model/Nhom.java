package com.example.workreport.model;

import jakarta.persistence.*;

@Entity
@Table(name = "NHOM")
public class Nhom {

    @Id
    @Column(name = "NhomID")
    private String nhomID;

    @Column(name = "TenNhom")
    private String tenNhom;

    @Column(name = "TruongNhom")
    private String truongNhom;

    @Column(name = "LopID")
    private String lopID;

    public String getNhomID() { return nhomID; }
    public void setNhomID(String nhomID) { this.nhomID = nhomID; }

    public String getTenNhom() { return tenNhom; }
    public void setTenNhom(String tenNhom) { this.tenNhom = tenNhom; }

    public String getTruongNhom() { return truongNhom; }
    public void setTruongNhom(String truongNhom) { this.truongNhom = truongNhom; }

    public String getLopID() { return lopID; }
    public void setLopID(String lopID) { this.lopID = lopID; }
}