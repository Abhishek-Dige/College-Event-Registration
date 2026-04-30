import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load token and user info from sessionStorage if available
        const storedToken = sessionStorage.getItem('token');
        const storedUser = sessionStorage.getItem('user');

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (tokenData) => {
        setToken(tokenData.token);
        const userData = { uid: tokenData.uid, email: tokenData.email };
        setUser(userData);
        
        sessionStorage.setItem('token', tokenData.token);
        sessionStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = async () => {
        if (user && user.uid) {
            await api.logout(user.uid);
        }
        setToken(null);
        setUser(null);
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
    };

    if (loading) {
        return <div>Loading...</div>; // or a spinner
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
