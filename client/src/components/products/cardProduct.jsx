import React from "react";
import { Link } from "react-router-dom";

const CardProduct = () => {
  return (
    <Link to="/" className="card-product">
      <div className="image-container">
        <img src="/img/founder1.png" alt="" />
      </div>
      <div className="data-products">
        <p>Name</p>
        <p>$ 50000</p>
      </div>
    </Link>
  );
};

export default CardProduct;
