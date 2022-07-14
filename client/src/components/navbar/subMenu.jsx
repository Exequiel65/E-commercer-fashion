import React from "react";
import { Link } from 'react-router-dom'
const SubMenu = () => {
  return (
    <div className="link-nav-container">
      <ul className="nav-contain">
        <li className="link-nav"><Link to='/'>Home</Link></li>
        <li className="link-nav"><Link to='/products'>Product</Link></li>
        <li className="link-nav"><Link to='/about'>About</Link></li>
        <li className="link-nav"><Link to='/contact'>Contact</Link></li>
        <li className="link-nav"><Link to='/store'>Store</Link></li>
      </ul>
    </div>
  );
};

export default SubMenu;
