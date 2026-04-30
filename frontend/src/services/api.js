const API_BASE_URL = 'http://localhost:8080/auth'; // Adjust based on your Spring Boot port

const getDeviceId = () => {
    let deviceId = sessionStorage.getItem("deviceId");
    if (!deviceId) {
        // Simple UUID generation
        deviceId = 'device-' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem("deviceId", deviceId);
    }
    return deviceId;
};

export const api = {
    register: async (data) => {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, deviceId: getDeviceId() }),
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to register');
        }
        
        return response.json();
    },
    
    login: async (data) => {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, deviceId: getDeviceId() }),
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to login');
        }
        
        return response.json();
    },

    logout: async (uid) => {
        try {
            await fetch(`${API_BASE_URL}/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ uid, deviceId: getDeviceId() }),
            });
        } catch (e) {
            console.error(e);
        }
    },

    fetchProtected: async (url, options = {}) => {
        const token = sessionStorage.getItem('token');
        const headers = {
            ...options.headers,
            'Authorization': `Bearer ${token}`,
            'X-Device-Id': getDeviceId()
        };

        const response = await fetch(url, { ...options, headers });
        if (response.status === 401 || response.status === 403) {
            // Session invalidated
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
            window.location.reload();
            throw new Error("Session invalid. Logged in from another device.");
        }
        return response;
    }
};
