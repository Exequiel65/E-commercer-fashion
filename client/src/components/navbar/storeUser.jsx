import React from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/authLogin'


const StoreUser = ({isLogin}) => {
  const dispatch = useDispatch()
  const handleClick = (e)=>{
    if (e.target.text === 'Logout') {
      dispatch(logout())
    } else{
      if (!isLogin) {
        return
      }
      e.preventDefault()
      let dropdown = document.querySelector('.dropdown-user-login')
      dropdown.classList.toggle('ds-none')
    }

  }

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
          <Link to='/login' onClick={handleClick}><i className="far fa-user"></i></Link>
          { isLogin && 
            <div className="dropdown-user-login ds-none">
              <ul>
                <li><Link to='/profile' className="link-dropdown">Profile</Link></li>
                <li><a href="/" className="link-dropdown" onClick={handleClick}>Logout</a></li>
              </ul>
            </div>
          }
          
        </li>
      </ul>
    </div>
  );
};

export default StoreUser;
