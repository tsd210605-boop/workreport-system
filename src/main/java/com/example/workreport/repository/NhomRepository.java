package com.example.workreport.repository;

import com.example.workreport.model.Nhom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface NhomRepository extends JpaRepository<Nhom, String> {

    @Query(value = "SELECT n.NhomID, n.TenNhom, n.TruongNhom, n.LopID " +
                   "FROM NHOM n " +
                   "JOIN NHOM_MEMBER nm ON n.NhomID = nm.NhomID " +
                   "WHERE nm.SinhVienID = :sinhVienID", nativeQuery = true)
    List<Object[]> findNhomBySinhVienID(@Param("sinhVienID") String sinhVienID);
}