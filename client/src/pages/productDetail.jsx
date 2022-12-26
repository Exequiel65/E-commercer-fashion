import React from 'react';
import { getOneProduct } from '../services/getOneProduct';
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    let { id } = useParams()
    
    getOneProduct(id)
    return (
        <div>
            detalle de producto
            
        </div>
    );
}

export default ProductDetail;
