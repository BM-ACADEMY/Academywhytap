import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../modules/admin/layout/Layout';
import Dashboard from '../modules/admin/layout/Dashboard';
import AdminContact from '../modules/admin/contact/Contact';
import AdminCertificates from '../modules/admin/certificate/Certificates';

import AdminLogin from '../modules/admin/auth/Login';
import AdminSignup from '../modules/admin/auth/Signup';




const Adminroutes = () => {
    // Current authentication state
    const token = localStorage.getItem('adminToken');

    return (
        <Routes>
            {/* 1. Public Authentication Routes (No token required) */}
            <Route path="login" element={<AdminLogin />} />
            <Route path="signup" element={<AdminSignup />} />

            {/* 2. Protected Routes Group */}
            <Route 
                element={token ? <Layout /> : <Navigate to="/admin/login" replace />}
            >
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="certificates" element={<AdminCertificates />} />
                <Route path="messages" element={<AdminContact />} />
                
                {/* Internal catch-all for admin area */}
                <Route path="*" element={<Navigate to="dashboard" replace />} />
            </Route>
        </Routes>
    );
};

export default Adminroutes;
