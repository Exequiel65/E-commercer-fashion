import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Home from '../pages/home';
import Nav from '../components/navbar/nav';
import FooterWrapper from '../components/footer/footerWrapper';
import AboutUs from '../pages/aboutUs';
import Contact from '../pages/Contact';
import Products from '../pages/Products';
import ProductDetail from '../pages/productDetail';

const HomeRouter = () => {
    const estado = useSelector((state) => state);
    console.log(estado.auth.user)
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id'  element={<ProductDetail/>} />

                
            </Routes>
            <FooterWrapper />
        </>
    );
}

export default HomeRouter;