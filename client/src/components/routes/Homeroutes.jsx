import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../modules/home/pages/Hero';
import Welcome from '../modules/home/pages/Welcome';
import Contact from '../modules/home/pages/Contact/Contact';
import VerifyCertificate from '../modules/home/pages/certificate/VerifyCertificate';

export const Homeroutes = () => {
    return (
        <Routes>
            {/* Main Landing Components */}
            <Route index element={
                <>
                    <Hero />
                    <Welcome />
                </>
            } />
            
            {/* Inner Pages */}
            <Route path="contact" element={<Contact />} />
            <Route path="verify-certificate" element={<VerifyCertificate />} />
        </Routes>
    );
};
