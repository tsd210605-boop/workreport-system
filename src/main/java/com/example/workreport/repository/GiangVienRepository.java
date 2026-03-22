package com.example.workreport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.workreport.model.GiangVien;

public interface GiangVienRepository extends JpaRepository<GiangVien, String> {
}