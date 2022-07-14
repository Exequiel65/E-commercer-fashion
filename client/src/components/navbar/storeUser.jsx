import React from "react";
import { Link } from 'react-router-dom'
const StoreUser = () => {
  return (
    <div className="store-container">
      <ul className="list-contain">
        <li className="search-button">
          <Link to='/search'><img src="/svg/Shape.svg" alt="" /></Link>
          
        </li>
        <li className="cart-contain">
          <Link to='/cart'><img src="/svg/cart.svg" alt="" /> </Link>
          
        </li>
        <li className="profile-button">
          <Link to='/login'><i className="far fa-user"></i></Link>
          
        </li>
      </ul>
    </div>
  );
};

export default StoreUser;
