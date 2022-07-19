import React from "react";
import { toThousand } from '../../../helpers/toThousand'
import { result } from '../../../helpers/salesFunction'
const ItemCarousel = ({product}) => {
let price = product.price
  if (product.discount > 0) {
    price = result(product.discount, product.price)
  }
  return (
    <div className="card">
      <div className="photo-contain">
        <img
          src={product.images[0]}
          alt=""
        />
      </div>
      <div className="data-contain">
        <div className="data">
          <p className="name-product">{product.name}</p>
          <p className="discount">${product.price}</p>
          <span className="text-discount">{product.discount}%</span>
          <p className="price-carousel">$ {toThousand(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCarousel;
