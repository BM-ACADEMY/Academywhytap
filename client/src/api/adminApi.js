import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URI.endsWith('/') 
    ? import.meta.env.VITE_BASE_URI 
    : `${import.meta.env.VITE_BASE_URI}/`;

const adminApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor: Always attach the latest token from storage
adminApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor: Handle errors globally
adminApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // If the token is expired (401) OR the user lacks permissions (403)
        // Treat both as a need to re-verify the session
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            console.warn(`Session issue detected (${error.response.status}). Resetting session.`);
            
            // Only clear and redirect if we think we are logged in
            if (localStorage.getItem('adminToken')) {
                localStorage.removeItem('adminToken');
                localStorage.removeItem('adminUser');
                
                // Alert the user only on real Forbidden errors
                if (error.response.status === 403) {
                    alert("Security session sync issue. Please sign in again.");
                }

                if (!window.location.pathname.includes('/admin/login')) {
                    window.location.href = '/admin/login';
                }
            }
        }
        return Promise.reject(error);
    }
);

export default adminApi;
