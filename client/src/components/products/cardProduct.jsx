import React from "react";
import { Link } from "react-router-dom";
import { toThousand } from "../../helpers/toThousand";

const CardProduct = ({product}) => {
  return (
    <Link to="/" className="card-product">
      <div className="image-container">
        <img src={product.images[0]} alt="" />
      </div>
      <div className="data-products">
        <p>{product.name}</p>
        <p>$ {toThousand(product.price)}</p>
      </div>
    </Link>
  );
};

export default CardProduct;
