package com.example.workreport.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.workreport.model.GiangVien;
import com.example.workreport.repository.GiangVienRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/giangvien")
public class GiangVienController {

    @Autowired
    private GiangVienRepository repository;

    @GetMapping
    public List<GiangVien> getAllGiangVien() {
        return repository.findAll();
    }
}