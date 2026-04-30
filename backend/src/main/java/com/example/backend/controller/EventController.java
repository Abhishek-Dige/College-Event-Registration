package com.example.backend.controller;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api/events")
@CrossOrigin(origins = "*")
public class EventController {

    @GetMapping
    public ResponseEntity<List<Map<String, Object>>> getAllEvents() {
        try {
            Firestore db = FirestoreClient.getFirestore();
            ApiFuture<QuerySnapshot> future = db.collection("events").get();
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();

            List<Map<String, Object>> events = new ArrayList<>();
            for (QueryDocumentSnapshot document : documents) {
                Map<String, Object> eventData = document.getData();
                eventData.put("id", document.getId());
                events.add(eventData);
            }
            return ResponseEntity.ok(events);
        } catch (InterruptedException | ExecutionException e) {
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getEvent(@PathVariable String id) throws Exception {
        Firestore firestore = FirestoreClient.getFirestore();
        DocumentSnapshot doc = firestore.collection("events").document(id).get().get();

        if (!doc.exists()) {
            return ResponseEntity.status(404).body("Not found");
        }

        return ResponseEntity.ok(doc.getData());
    }
}
