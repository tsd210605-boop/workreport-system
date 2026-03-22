package com.example.workreport.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.workreport.model.MonHoc;
import com.example.workreport.repository.MonHocRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/monhoc")
public class MonHocController {

    @Autowired
    private MonHocRepository repository;

    @GetMapping
    public List<MonHoc> getAllMonHoc() {
        return repository.findAll();
    }
}