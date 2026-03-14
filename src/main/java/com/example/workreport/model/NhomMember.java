package com.example.workreport.model;

import jakarta.persistence.*;

@Entity
@Table(name = "NHOM_MEMBER")
public class NhomMember {

    @Id
    @Column(name = "NhomID")
    private String nhomID;

    @Column(name = "SinhVienID")
    private String sinhVienID;

    public String getNhomID() { return nhomID; }
    public void setNhomID(String nhomID) { this.nhomID = nhomID; }

    public String getSinhVienID() { return sinhVienID; }
    public void setSinhVienID(String sinhVienID) { this.sinhVienID = sinhVienID; }
}