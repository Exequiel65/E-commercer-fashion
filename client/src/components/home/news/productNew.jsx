import React from "react";
import { result } from '../../../helpers/salesFunction'
import { toThousand } from '../../../helpers/toThousand'

const ProductNew = ({product}) => {
  let price = product.price
  if (product.discount > 0) {
    price = result(product.discount, product.price)
  }

  return (
    <div className="product-contain flex-row">
      <div className="image-contain">
        <img
          src={product.images[0]}
          alt=""
        />
      </div>
      <div className="data-contain-new">
        <p className="name-product-new">{product.name}</p>
        {product.discount > 0 && 
        <>
          <p className="name-product-new discount">${product.price}</p>
          <span className="text-discount">%{product.discount}</span>
          
        </>
        }
        <p className="price-product-new">$ {toThousand(price)}</p>
      </div>
    </div>
  );
};

export default ProductNew;
