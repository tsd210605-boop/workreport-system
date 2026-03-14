package com.example.workreport.controller;

import com.example.workreport.repository.NhomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class NhomController {

    @Autowired
    private NhomRepository nhomRepository;

    @GetMapping("/sinhvien/{sinhVienID}/nhom")
    public List<Map<String, Object>> getNhomBySinhVien(@PathVariable String sinhVienID) {
        List<Object[]> results = nhomRepository.findNhomBySinhVienID(sinhVienID);
        List<Map<String, Object>> nhoms = new ArrayList<>();
        for (Object[] row : results) {
            Map<String, Object> nhom = new HashMap<>();
            nhom.put("nhomID", row[0]);
            nhom.put("tenNhom", row[1]);
            nhom.put("truongNhom", row[2]);
            nhom.put("lopID", row[3]);
            nhoms.add(nhom);
        }
        return nhoms;
    }
}
