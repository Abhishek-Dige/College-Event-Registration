export const getBaseUrl = () => {
    let url = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
    // Clean up trailing slash
    if (url.endsWith('/')) url = url.slice(0, -1);
    // Remove /auth if accidentally added
    if (url.endsWith('/auth')) url = url.slice(0, -5);
    return url;
};
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
        const response = await fetch(`${getBaseUrl()}/auth/register`, {
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
        const response = await fetch(`${getBaseUrl()}/auth/login`, {
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
