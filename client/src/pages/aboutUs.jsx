import React from 'react';
import AboutWrapper from '../components/about/aboutWrapper';
import FirstVist from '../components/firstVist';
import '../styles/about.css'
import { useEffect } from 'react';
import { titlePage } from '../helpers/changeTitlePage';

const AboutUs = () => {
    useEffect(() => {
        titlePage('Nostros')
    }, []);
    return (
        <main className='main-about flex-colummn'>
            <FirstVist title='About Us' descr='Lorem, ipsum dolor sit amet'/>
            <AboutWrapper />
        </main>
    );
}

export default AboutUs;
