import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Home from '../pages/home';
import Nav from '../components/navbar/nav';
import FooterWrapper from '../components/footer/footerWrapper';
import AboutUs from '../pages/aboutUs';

const HomeRouter = () => {
    const estado = useSelector((state) => state);
    console.log(estado.auth.user)
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
            </Routes>
            <FooterWrapper />
        </>
    );
}

export default HomeRouter;