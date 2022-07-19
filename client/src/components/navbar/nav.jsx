import React from "react";
import "../../styles/navBar.css";
import StoreUser from "./storeUser";
import SubMenu from "./subMenu";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Nav = () => {
    const estado = useSelector((state) => state);
  const handleClick = () => {
    let subMenu = document.querySelector(".link-nav-container");
    if (subMenu.style.display === "" || subMenu.style.display === "none") {
      return (subMenu.style.display = "block");
    }
    if (subMenu.style.display === "block") {
      return (subMenu.style.display = "none");
    }
  };

  return (
    <nav>
      <div className="logo-contain">
        <Link to="/">
          <img
            src="https://eivissa.es/innovacio/wp-content/uploads/2021/08/Curs-de-commerce.jpeg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="hamburguer-menu" onClick={handleClick}>
        <i className="fas fa-bars"></i>
      </div>
      <SubMenu isLogin={estado.auth.user} />
      <StoreUser isLogin={estado.auth.user} />
    </nav>
  );
};

export default Nav;
