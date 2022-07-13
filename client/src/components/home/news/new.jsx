import React from "react";
import TitleProductsHome from '../titleProductsHome';
import ProductNew from "./productNew";
const New = ({title}) => {
    return (
        <div className="new-contain">
            <TitleProductsHome title={title} />
            <div className="products-container ">
                <ProductNew />
                <ProductNew />
                <ProductNew />
                <ProductNew />
            </div>
        </div>
    );
};

export default New;
