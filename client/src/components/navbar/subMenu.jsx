import React from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/authLogin'

const SubMenu = ({isLogin}) => {
  const dispatch = useDispatch()
  const log = ()=>{
    let subMenu = document.querySelector('.link-nav-container')
    if (isLogin) {
      subMenu.style.bottom = '-240px'
    }
  }
  const handleClick = (e)=>{
    let subMenu = document.querySelector('.link-nav-container')
    subMenu.style.display = 'none'
    if (e.target.text === 'Logout') {
      dispatch(logout())
    }
  }
  useEffect(() => {
    log()
  }, [isLogin]);
  return (
    <div className="link-nav-container" >
      <ul className="nav-contain" >
        <li className="link-nav"><Link to='/' onClick={handleClick}>Home</Link></li>
        <li className="link-nav"><Link to='/products' onClick={handleClick}>Product</Link></li>
        <li className="link-nav"><Link to='/about' onClick={handleClick}>About</Link></li>
        <li className="link-nav"><Link to='/contact' onClick={handleClick}>Contact</Link></li>
        <li className="link-nav"><Link to='/store' onClick={handleClick}>Store</Link></li>
        {isLogin ? <li className="link-nav user-login" ><Link to='/profile' onClick={handleClick}>Profile</Link></li> : <li className="link-nav user-login"><Link to='/login'>Login</Link></li>}
        {isLogin && <li className="link-nav user-login"><a href="/" onClick={handleClick}>Logout</a></li>}
      </ul>
    </div>
  );
};

export default SubMenu;
