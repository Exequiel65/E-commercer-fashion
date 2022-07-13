import React from 'react';
import Carrousel from '../components/home/carrousel';
import NewsWrapper from '../components/home/news/newsWrapper';

import '../styles/home.css'
import '../styles/sectionNews.css'
import '../styles/downHome.css'

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

            <NewsWrapper />
            <section className='downHome'>
                <div className='image-container flex-colummn'>
                    <div className='image-contain-home'>
                        <img src="/img/1920-11 2.png" alt="" />
                    </div>
                    <div className='card-modal flex-colummn'>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, deleniti molestiae dolores odit inventore totam </p>
                        <a href="/">Read</a>
                    </div>
                </div>

                <div className='instagram-container'>
                    <div className='title-box'>
                        <h3>Instagram</h3>
                        <div className='line-instagram'></div>
                    </div>
                    <div className='flex-row gallery-instagram'>
                        <img src="/img/Rectangle 38.png" alt="" />
                        <img src="/img/Rectangle 39.png" alt="" />
                        <img src="/img/Rectangle 40.png" alt="" />
                        <img src="/img/Rectangle 41.png" alt="" />
                        <img src="/img/Rectangle 42.png" alt="" />
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Home;
