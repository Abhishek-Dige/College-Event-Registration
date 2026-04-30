package com.example.backend.controller;

import com.example.backend.model.Record;
import com.example.backend.service.RecordFirebaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/data")
@CrossOrigin(origins = "*") // Allows React frontend to access this API
public class RecordController {

    @Autowired
    private RecordFirebaseService recordService;

    // GET /api/data → return all records
    @GetMapping
    public List<Record> getAllRecords() throws ExecutionException, InterruptedException {
        return recordService.findAll();
    }

    // POST /api/data → add a new record
    @PostMapping
    public Record createRecord(@RequestBody Record newRecord) throws ExecutionException, InterruptedException {
        return recordService.save(newRecord);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Record> updateRecord(@PathVariable String id, @RequestBody Record recordDetails) throws ExecutionException, InterruptedException {
        Record record = recordService.findById(id);
        if (record != null) {
            record.setName(recordDetails.getName());
            record.setEmail(recordDetails.getEmail());
            record.setEventName(recordDetails.getEventName());
            record.setTime(recordDetails.getTime());
            Record updatedRecord = recordService.save(record);
            return ResponseEntity.ok(updatedRecord);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE /api/data/{id} → delete a record
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecord(@PathVariable String id) throws ExecutionException, InterruptedException {
        if (recordService.existsById(id)) {
            recordService.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // DELETE /api/data → delete all records
    @DeleteMapping
    public ResponseEntity<Void> deleteAllRecords() throws ExecutionException, InterruptedException {
        recordService.deleteAll();
        return ResponseEntity.ok().build();
    }
}
