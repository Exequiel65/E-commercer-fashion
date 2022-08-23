import React from 'react';
import FirstVist from '../components/firstVist';
import ProductsWrapper from '../components/products/ProductsWrapper';
import '../styles/products.css'
const Products = () => {
    return (
        
        <main className='main-list-products'>
            <FirstVist title='Products' descr='Lorem ipsum dolor sit amet' />
            <ProductsWrapper />
        </main>
    );
}

export default Products;
