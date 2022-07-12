import React from 'react';
import '../../styles/navBar.css'
const Nav = () => {
    return (
        <nav>
            <div className='logo-contain'>
                <img src="" alt="logo" />
            </div>
            <div className='link-nav-container'>
                <ul className='nav-contain'>
                    <li className='link-nav' >Home</li>
                    <li className='link-nav' >Product</li>
                    <li className='link-nav' >About</li>
                    <li className='link-nav' >Contact</li>
                    <li className='link-nav' >Store</li>
                </ul>
            </div>
            <div className='store-container'>
                <ul className='list-contain'>
                    <li><img src="/svg/Shape.svg" alt="" /></li>
                    <li className='cart-contain'><img src="/svg/cart.svg" alt="" /></li>
                    <li><i class="far fa-user"></i></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
