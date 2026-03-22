package com.example.workreport.model;

import jakarta.persistence.*;
@Entity
@Table(name = "MON_HOC")
public class MonHoc {
    @Id
    @Column(name = "MonHocID")
    private String monHocID;

    @Column(name = "TenMonHoc")
    private String tenMonHoc;

    @Column(name = "MoTa")
    private String moTa;

    @Column(name = "SoTinChi")
    private int soTinChi;

    public String getMonHocID() {
        return monHocID;
    }
    public void setMonHocID(String monHocID){
        this.monHocID = monHocID;
    }

    public String getTenMonHoc(){
        return tenMonHoc;
    }
    public void setTenMonHoc(String tenMonHoc){
        this.tenMonHoc = tenMonHoc;
    }

    public String getMoTa(){
        return moTa;
    }
    public void setMoTa(String moTa){
        this.moTa = moTa;
    }

    public int getSoTinChi(){
        return soTinChi;
    }
    public void setSoTinChi(int soTinChi){
        this.soTinChi = soTinChi;
    }

}
