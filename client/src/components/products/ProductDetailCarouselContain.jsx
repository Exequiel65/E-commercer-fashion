import React, { useState } from 'react';
import CarouselProductDetail from '../carousel/CarouselProductDetail';
import {toThousand} from '../../helpers/toThousand'

const ProductDetailCarouselContain = ({product}) => {
    console.log(product)
    const [Like, setLike] = useState(false);
    let likeProduct = ()=>{
        Like ? setLike(false) : setLike(true);
    }
    return (
        <article className='visual-product'>
        <div className='title-product-container'>
            <div className='title-product'>
                <h2>{product.name}</h2>
                <h5>$ { toThousand(product.price)}</h5>
            </div>
            <div className='icon-contain'>
                {Like ? 
                    <p className='like' onClick={likeProduct}><i className="fas fa-heart"></i></p> :
                    <p onClick={likeProduct}><i className="far fa-heart"></i></p>
                }
            </div>
        </div>
        <CarouselProductDetail images={product.images} />
    </article>
    );
}

export default ProductDetailCarouselContain;
