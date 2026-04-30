package com.example.backend.service;

import com.google.cloud.firestore.Firestore;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@Service
public class AuthService {

    @Value("${firebase.api.key:YOUR_API_KEY}")
    private String firebaseApiKey;

    public String registerUser(String name, String email, String password, String deviceId) throws FirebaseAuthException, ExecutionException, InterruptedException {
        // 1. Create user in Firebase Auth
        UserRecord.CreateRequest request = new UserRecord.CreateRequest()
                .setEmail(email)
                .setPassword(password)
                .setDisplayName(name);

        UserRecord userRecord = FirebaseAuth.getInstance().createUser(request);
        String uid = userRecord.getUid();

        // 2. Save user in Firestore
        Firestore db = FirestoreClient.getFirestore();
        Map<String, Object> userData = new HashMap<>();
        userData.put("name", name);
        userData.put("email", email);
        userData.put("createdAt", System.currentTimeMillis());

        userData.put("activeDeviceId", deviceId);

        db.collection("users").document(uid).set(userData).get();

        return uid;
    }

    public Map<String, Object> loginUser(String email, String password, String deviceId) {
        // Use Firebase Auth REST API to verify credentials and get an ID token
        String url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + firebaseApiKey;

        RestTemplate restTemplate = new RestTemplate();

        Map<String, String> requestBody = new HashMap<>();
        requestBody.put("email", email);
        requestBody.put("password", password);
        requestBody.put("returnSecureToken", "true");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, String>> request = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<Map> response = restTemplate.postForEntity(url, request, Map.class);
            Map<String, Object> responseBody = response.getBody();

            Map<String, Object> result = new HashMap<>();
            if (responseBody != null) {
                result.put("token", responseBody.get("idToken"));
                String uid = (String) responseBody.get("localId");
                result.put("uid", uid);
                result.put("email", responseBody.get("email"));
                
                // FORCE LOGOUT OLD DEVICE by updating activeDeviceId in Firestore
                Firestore db = FirestoreClient.getFirestore();
                Map<String, Object> updateData = new HashMap<>();
                updateData.put("activeDeviceId", deviceId);
                updateData.put("lastLogin", System.currentTimeMillis());
                db.collection("users").document(uid).set(updateData, com.google.cloud.firestore.SetOptions.merge()).get();
            }
            return result;
        } catch (Exception e) {
            throw new RuntimeException("Invalid credentials or authentication error: " + e.getMessage());
        }
    }

    public void logoutUser(String uid) {
        try {
            Firestore db = FirestoreClient.getFirestore();
            Map<String, Object> updateData = new HashMap<>();
            updateData.put("activeDeviceId", null);
            db.collection("users").document(uid).set(updateData, com.google.cloud.firestore.SetOptions.merge()).get();
        } catch (Exception e) {
            System.err.println("Failed to clear device id on logout: " + e.getMessage());
        }
    }
}
