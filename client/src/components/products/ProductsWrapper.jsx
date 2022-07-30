import React, { useEffect } from 'react';
import { useState } from 'react';
import { FetchGet } from '../../helpers/AxiosMethod';
import Loader from '../Load/Loader';
import CardProduct from './cardProduct';
import FiltersWrapper from './FiltersWrapper';

const ProductsWrapper = () => {
    const [Products, setProducts] = useState(null);

    const getProducts = async ()=>{
        let products = await FetchGet('/product/all')
        setProducts(products.data.data)
    }
    useEffect(() => {
        getProducts()
    }, []);
    return (
        <section className='products-section flex-colummn'>
            <div className='list-container flex-row'>
                <FiltersWrapper />
                {!Products ? <Loader style={{position : 'relative', backgroundColor : '#F2F3F5', zIndex: 10, height:'50vh'}}/> :
                    Products.map((product, i)=>(
                        <CardProduct key={product.name + i} product={product}  /> 
                    ))
                }
                
            </div>
        </section>
    );
}

export default ProductsWrapper;
