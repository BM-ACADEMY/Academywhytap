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
import StudentSuccessArc from '../modules/home/pages/homepages/StudentSuccessArc';
import EventsPage from '../modules/home/pages/Events/EventsPage';
import EventDetailPage from '../modules/home/pages/Events/EventDetailPage';
import BlogsPage from '../modules/home/pages/Blog/BlogsPage';
import MasterclassesPage from '../modules/home/pages/Blog/MasterclassesPage';
import InterviewQuestionsPage from '../modules/home/pages/Blog/InterviewQuestionsPage';
import InterviewQuestionDetail from '../modules/home/pages/Blog/InterviewQuestionDetail';
import FAQsPage from '../modules/home/pages/Blog/FAQsPage';
import ResourcesPage from '../modules/home/pages/Blog/ResourcesPage';
import ArticleDetailPage from '../modules/home/pages/Blog/ArticleDetailPage';
import ScrollToTop from '../common/ScrollToTop';

export const Homeroutes = () => {
    return (
        <>
            <ScrollToTop />
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
            <Route path="placements" element={<StudentSuccessArc />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="event/:id" element={<EventDetailPage />} />
            <Route path="blogs" element={<BlogsPage />} />
            <Route path="masterclasses" element={<MasterclassesPage />} />
            <Route path="interview-questions" element={<InterviewQuestionsPage />} />
            <Route path="interview-questions/:category" element={<InterviewQuestionDetail />} />
            <Route path="faqs" element={<FAQsPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="blog/:slug" element={<ArticleDetailPage />} />

            {/* Course Routes */}
            <Route path="course/digital-marketing" element={<DigitalMarketingRoute />} />
            <Route path="course/full-stack-development" element={<FullStack />} />
            <Route path="course/data-analysis" element={<DataAnalysis />} />
            <Route path="course/video-editing" element={<VideoEditing />} />
            
            {/* Keeping the old route for compatibility if needed, but the new one is cleaner */}
            <Route path="course/pg-certification-in-ai-powered-digital-marketing/*" element={<DigitalMarketingRoute />} />
        </Routes>
        </>
    );
};

