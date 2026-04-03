import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../modules/home/pages/Hero';
import Welcome from '../modules/home/pages/Welcome';
import Contact from '../modules/home/pages/Contact/Contact';
import VerifyCertificate from '../modules/home/pages/certificate/VerifyCertificate';
import DigitalMarketingRoute from '../modules/home/pages/Course/Route/DigitalMarketingRoute';
import Trendingcourses from '../modules/home/pages/Trendingcourses';
import CeoSection from '../modules/home/pages/CeoSection';

export const Homeroutes = () => {
    return (
        <Routes>
            {/* Main Landing Components */}
            <Route index element={
                <>
                    <Hero />
                    <Welcome />
                    <Trendingcourses />
                    <CeoSection />
                </>
            } />
            
            {/* Inner Pages */}
            <Route path="contact" element={<Contact />} />
            <Route path="verify-certificate" element={<VerifyCertificate />} />

            {/* Course Routes */}
            <Route path="course/pg-certification-in-ai-powered-digital-marketing/*" element={<DigitalMarketingRoute />} />
        </Routes>
    );
};
