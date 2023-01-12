import React from 'react';
import CardProduct from './cardProduct';
const DetailFeaturedProducts = ({Products}) => {
    return (
        <article className='products-relations flex-colummn'>
                    <div className="title-carrousel" style={{width: '90%'}}>
                        <div className="line-spacing">
                            <div></div>
                        </div>
                        <h5>Featured</h5>
                    </div>
                    {Products && Products.map((product, i) => (
                        <CardProduct key={product.name + i} product={product} />
                    ))}
                </article>
    );
}

export default DetailFeaturedProducts;
