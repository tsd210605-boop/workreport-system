package com.example.workreport.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.workreport.model.SinhVien;
import com.example.workreport.repository.SinhVienRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/sinhvien")
public class SinhVienController {

    @Autowired
    private SinhVienRepository repository;

    @GetMapping
    public List<SinhVien> getAllSinhVien() {
        return repository.findAll();
    }
}