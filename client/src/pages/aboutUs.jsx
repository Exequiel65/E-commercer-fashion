import React from 'react';
import AboutWrapper from '../components/about/aboutWrapper';
import FirstVist from '../components/firstVist';
import '../styles/about.css'


const AboutUs = () => {
    return (
        <main className='main-about flex-colummn'>
            <FirstVist title='About Us' descr='Lorem, ipsum dolor sit amet'/>
            <AboutWrapper />
        </main>
    );
}

export default AboutUs;
