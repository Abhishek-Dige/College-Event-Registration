package com.example.backend.config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.springframework.context.annotation.Configuration;

import jakarta.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.IOException;

@Configuration
public class FirebaseConfig {

    @PostConstruct
    public void initialize() {
        try {
            // Check if already initialized to prevent errors
            if (FirebaseApp.getApps().isEmpty()) {
                GoogleCredentials credentials;
                String envCredentials = System.getenv("FIREBASE_CREDENTIALS");
                
                if (envCredentials != null && !envCredentials.isEmpty()) {
                    // Load from environment variable (useful for Docker/EC2/Render)
                    credentials = GoogleCredentials.fromStream(new java.io.ByteArrayInputStream(envCredentials.getBytes()));
                } else {
                    // Fallback to local file for local development
                    java.io.InputStream serviceAccount = getClass().getResourceAsStream("/serviceAccountKey.json");
                    if (serviceAccount == null) {
                        throw new RuntimeException("serviceAccountKey.json not found in resources folder!");
                    }
                    credentials = GoogleCredentials.fromStream(serviceAccount);
                }
                
                FirebaseOptions options = FirebaseOptions.builder()
                        .setCredentials(credentials)
                        .build();

                FirebaseApp.initializeApp(options);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
