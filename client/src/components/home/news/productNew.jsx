import React from "react";

const ProductNew = () => {
  return (
    <div className="product-contain flex-row">
      <div className="image-contain">
        <img
          src="https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw03f023c8/42CMA0054_1R7_01.jpg?imwidth=690&impolicy=product"
          alt=""
        />
      </div>
      <div className="data-contain-new">
        <p className="name-product-new">Nombre producto</p>
        <p className="price-product-new">Price</p>
      </div>
    </div>
  );
};

export default ProductNew;
