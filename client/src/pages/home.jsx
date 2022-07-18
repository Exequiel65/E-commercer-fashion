import React, { useEffect, useState } from 'react';
import Carrousel from '../components/home/carousel/carrousel';
import NewsWrapper from '../components/home/news/newsWrapper';
import DownHome from '../components/home/bottomHome/downHome';
import '../styles/home.css'
import { FetchGet } from '../helpers/AxiosMethod'
import FirstVist from '../components/firstVist';

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
            <FirstVist title='Welcome to E-commercer' descr='Lorem, ipsum dolor sit amet'/>
            <Carrousel products={Products.discounts} />

            <NewsWrapper featured={Products.featuredProducts} bestSellers={Products.bestSellers} newArrival={Products.newArrival} />
            <DownHome />
        </main>
    );
}

export default Home;
