package com.example.backend.service;

import com.example.backend.model.Record;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ExecutionException;

@Service
public class RecordFirebaseService {

    private static final String COLLECTION_NAME = "records";

    public List<Record> findAll() throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = db.collection(COLLECTION_NAME).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        
        List<Record> records = new ArrayList<>();
        for (QueryDocumentSnapshot document : documents) {
            Record record = document.toObject(Record.class);
            record.setId(document.getId());
            records.add(record);
        }
        return records;
    }

    public Record save(Record record) throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();
        if (record.getId() == null || record.getId().isEmpty()) {
            record.setId(UUID.randomUUID().toString());
        }
        
        ApiFuture<WriteResult> collectionsApiFuture = db.collection(COLLECTION_NAME).document(record.getId()).set(record);
        collectionsApiFuture.get(); // Wait for save to complete
        return record;
    }

    public Record findById(String id) throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();
        DocumentReference docRef = db.collection(COLLECTION_NAME).document(id);
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot document = future.get();
        
        if (document.exists()) {
            Record record = document.toObject(Record.class);
            if (record != null) {
                record.setId(document.getId());
            }
            return record;
        }
        return null;
    }

    public boolean existsById(String id) throws ExecutionException, InterruptedException {
        return findById(id) != null;
    }

    public void deleteById(String id) throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResult = db.collection(COLLECTION_NAME).document(id).delete();
        writeResult.get();
    }

    public void deleteAll() throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> future = db.collection(COLLECTION_NAME).get();
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();
        
        for (QueryDocumentSnapshot document : documents) {
            db.collection(COLLECTION_NAME).document(document.getId()).delete().get();
        }
    }
}
