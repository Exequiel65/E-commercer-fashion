import React from 'react';
import Carrousel from '../components/home/carrousel';
import '../styles/home.css'
const Home = () => {
    return (
        <main className='main-home'>
            <section className='first-vist'>
                <div className='title-vist'>
                    <h3>Welcome to E-commercer</h3>
                    <p>Lorem, ipsum dolor sit amet</p>
                </div>
                <img className='line-home' src="/svg/line-home.svg" alt="" />
            </section>
            <Carrousel />
        </main>
    );
}

export default Home;
