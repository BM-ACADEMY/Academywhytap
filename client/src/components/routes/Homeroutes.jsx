import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../modules/home/pages/Contact/Contact';
import VerifyCertificate from '../modules/home/pages/certificate/VerifyCertificate';
import DigitalMarketingRoute from '../modules/home/pages/Course/Route/DigitalMarketingRoute';
import FullStack from '../modules/home/pages/Course/FullStack/FullStack';
import DataAnalysis from '../modules/home/pages/Course/DataAnalysis/DataAnalysis';
import VideoEditing from '../modules/home/pages/Course/VideoEditing/VideoEditing';
import CoursesPage from '../modules/home/pages/Course/CoursesPage';
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
            <Route path="courses" element={<CoursesPage />} />

            {/* Course Routes */}
            <Route path="course/digital-marketing" element={<DigitalMarketingRoute />} />
            <Route path="course/full-stack-development" element={<FullStack />} />
            <Route path="course/data-analysis" element={<DataAnalysis />} />
            <Route path="course/video-editing" element={<VideoEditing />} />
            
            {/* Keeping the old route for compatibility if needed, but the new one is cleaner */}
            <Route path="course/pg-certification-in-ai-powered-digital-marketing/*" element={<DigitalMarketingRoute />} />
        </Routes>
    );
};
