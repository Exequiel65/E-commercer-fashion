import React from 'react';
import Carrousel from '../components/home/carrousel';
import NewsWrapper from '../components/home/news/newsWrapper';
import DownHome from '../components/home/bottomHome/downHome';
import '../styles/home.css'

const Home = () => {
    return (
        <main className='main-home'>
            <section className='first-vist'>
                <div className='title-vist animate__animated animate__fadeInDown animate__delay-1s'>
                    <h3>Welcome to E-commercer</h3>
                    <p>Lorem, ipsum dolor sit amet</p>
                </div>
                <img className='line-home' src="/svg/line-home.svg" alt="" />
            </section>
            <Carrousel />

            <NewsWrapper />
            <DownHome />
        </main>
    );
}

export default Home;
