package com.example.backend.repository;

import com.example.backend.model.Record;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {
    // JpaRepository automatically provides basic CRUD operations:
    // findAll(), findById(), save(), deleteById(), etc.
}
