import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DigitalMarketing from '../DigitalMarketing/DigitalMarketing';

const DigitalMarketingRoute = () => {
    return (
        <Routes>
            <Route index element={<DigitalMarketing />} />
            {/* You can add more sub-routes for this course here */}
        </Routes>
    );
};

export default DigitalMarketingRoute;
