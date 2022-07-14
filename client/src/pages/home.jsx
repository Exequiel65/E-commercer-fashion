import React, { useEffect, useState } from 'react';
import Carrousel from '../components/home/carousel/carrousel';
import NewsWrapper from '../components/home/news/newsWrapper';
import DownHome from '../components/home/bottomHome/downHome';
import '../styles/home.css'
import { FetchGet } from '../helpers/AxiosMethod'

const Home = () => {
    const [Products, setProducts] = useState({});

    const apiGet = async ()=>{
        let products = await FetchGet('/product/featured')
        setProducts(products.data)
    }
    useEffect(() => {
        apiGet()
    }, []);
    return (
        <main className='main-home'>
            <section className='first-vist'>
                <div className='title-vist animate__animated animate__fadeInDown animate__delay-1s'>
                    <h3>Welcome to E-commercer</h3>
                    <p>Lorem, ipsum dolor sit amet</p>
                </div>
                <img className='line-home' src="/svg/line-home.svg" alt="" />
            </section>
            <Carrousel products={Products.discounts} />

            <NewsWrapper featured={Products.featuredProducts} bestSellers={Products.bestSellers} newArrival={Products.newArrival} />
            <DownHome />
        </main>
    );
}

export default Home;
