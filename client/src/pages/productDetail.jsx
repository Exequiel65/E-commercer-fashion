import React, { useEffect } from 'react';
import { getOneProduct } from '../services/getOneProduct';
import { useParams } from 'react-router-dom'

import '../styles/productDetail.css'
import { useState } from 'react';

import { FetchGet } from '../helpers/AxiosMethod';
import ProductDetailCarouselContain from '../components/products/ProductDetailCarouselContain';
import DetailData from '../components/products/DetailData';
import DetailFeaturedProducts from '../components/products/DetailFeaturedProducts';
import Loader from '../components/Load/Loader';

const ProductDetail = () => {
    let { id } = useParams()
    const [Products, setProducts] = useState(null);
    const [Product, setProduct] = useState();
    const getProducts = async () => {
        let oneProduct = await getOneProduct(id)
        setProduct(oneProduct.data.product)
        let products = await FetchGet(`/product/all?categorie=${oneProduct.data.product.categorie}`)
        setProducts(products.data.data)
    }
   
    useEffect(() => {
        getProducts()
    }, []);

    if(!Product){
        return  (
            <main style={{width : '100vw', height: '100vh'}}>
                <Loader style={{position : 'relative', backgroundColor : '#F2F3F5', zIndex: 10}}/>

            </main>)
    }
    return (
        <main className='detail-product'>
            <section className='info-product'>

               <ProductDetailCarouselContain product={Product}/>
                <DetailData product={Product} />

                <DetailFeaturedProducts Products={Products}/>
            </section>
        </main>
    );
}

export default ProductDetail;
