package com.example.backend.interceptor;

import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import com.google.firebase.cloud.FirestoreClient;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class SessionInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // Handle CORS preflight requests
        if (request.getMethod().equals("OPTIONS")) {
            return true;
        }

        String authHeader = request.getHeader("Authorization");
        String deviceId = request.getHeader("X-Device-Id");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Missing or invalid Authorization header");
            return false;
        }

        if (deviceId == null || deviceId.isEmpty()) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write("Missing X-Device-Id header");
            return false;
        }

        String idToken = authHeader.substring(7);

        try {
            // Verify token
            FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdToken(idToken);
            String uid = decodedToken.getUid();

            // Fetch user from Firestore
            Firestore db = FirestoreClient.getFirestore();
            DocumentSnapshot document = db.collection("users").document(uid).get().get();

            if (document.exists()) {
                String activeDeviceId = document.getString("activeDeviceId");

                // Check device id
                if (activeDeviceId == null || !activeDeviceId.equals(deviceId)) {
                    response.setStatus(HttpServletResponse.SC_FORBIDDEN);
                    response.getWriter().write("Session invalid. User is logged in on another device.");
                    return false;
                }
                
                // Optional: pass uid to controllers
                request.setAttribute("uid", uid);
                return true;
            } else {
                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("User profile not found");
                return false;
            }
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Token verification failed: " + e.getMessage());
            return false;
        }
    }
}
