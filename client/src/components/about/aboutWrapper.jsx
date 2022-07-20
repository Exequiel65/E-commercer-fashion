import React from 'react';
import CompanyMission from './CompanyMission';
import CompanyVision from './CompanyVision';
import Founders from './Founders';

const AboutWrapper = () => {
    // data-aos="fade-left"
    return (
        <>
            <CompanyMission />
            <CompanyVision />
            <Founders />
        </>
    );
}

export default AboutWrapper;
