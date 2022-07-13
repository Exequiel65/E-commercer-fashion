import React from "react";

const StoreUser = () => {
  return (
    <div className="store-container">
      <ul className="list-contain">
        <li className="search-button">
          <img src="/svg/Shape.svg" alt="" />
        </li>
        <li className="cart-contain">
          <img src="/svg/cart.svg" alt="" />
        </li>
        <li className="profile-button">
          <i className="far fa-user"></i>
        </li>
      </ul>
    </div>
  );
};

export default StoreUser;
