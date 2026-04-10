import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../modules/home/pages/Contact/Contact';
import VerifyCertificate from '../modules/home/pages/certificate/VerifyCertificate';
import DigitalMarketingRoute from '../modules/home/pages/Course/Route/DigitalMarketingRoute';
import { Homepages } from '../modules/home/pages/homepages/Homepages';

export const Homeroutes = () => {
    return (
        <Routes>
            {/* Main Landing Components */}
            <Route index element={
                <>
                    <Homepages />
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
