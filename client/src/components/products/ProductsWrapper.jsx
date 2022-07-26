import React from 'react';
import { Link} from 'react-router-dom'
import CardProduct from './cardProduct';

const ProductsWrapper = () => {
    return (
        <section className='products-section flex-colummn'>
            <div className='list-container flex-row'>
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </section>
    );
}

export default ProductsWrapper;
