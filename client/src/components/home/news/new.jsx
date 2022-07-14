import React from "react";
import TitleProductsHome from '../titleProductsHome';
import ProductNew from "./productNew";
const New = ({title, products}) => {
    return (
        <div className="new-contain">
            <TitleProductsHome title={title} />
            <div className="products-container ">
                {products.map((product, i)=>(
                    <ProductNew key={i + product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default New;
