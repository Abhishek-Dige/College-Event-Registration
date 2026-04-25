package com.example.backend.controller;

import com.example.backend.model.Record;
import com.example.backend.repository.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/data")
@CrossOrigin(origins = "*") // Allows React frontend to access this API
public class RecordController {

    @Autowired
    private RecordRepository recordRepository;

    // GET /api/data → return all records
    @GetMapping
    public List<Record> getAllRecords() {
        return recordRepository.findAll();
    }

    // POST /api/data → add a new record
    @PostMapping
    public Record createRecord(@RequestBody Record newRecord) {
        return recordRepository.save(newRecord);
    }

    // PUT /api/data/{id} → update a record
    @PutMapping("/{id}")
    public ResponseEntity<Record> updateRecord(@PathVariable Long id, @RequestBody Record recordDetails) {
        return recordRepository.findById(id).map(record -> {
            record.setName(recordDetails.getName());
            record.setValue(recordDetails.getValue());
            Record updatedRecord = recordRepository.save(record);
            return ResponseEntity.ok(updatedRecord);
        }).orElse(ResponseEntity.notFound().build());
    }

    // DELETE /api/data/{id} → delete a record
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecord(@PathVariable Long id) {
        if (recordRepository.existsById(id)) {
            recordRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
