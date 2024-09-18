import React from 'react';
import NavMenu from "./NavMenu";
import './Header.scss';
import logo from '../assets/images/logo.png';
import searchIcon from '../assets/icons/search.svg';
import cartIcon from '../assets/icons/cart.svg';

function Header() {
    return (
        <header className='Header'>
            <img className='Header__logo' src={logo} alt='logo'/>

            <NavMenu/>

            <div className='Header__left-wrapper'>
                <div className="Header__language">
                    <span className='Header__language-name'>VIE</span>

                    <div className='Header__language-divider'></div>

                    <span className='Header__language-name'>ENG</span>
                </div>

                <img className='Header__search-icon' src={searchIcon ?? ''} alt='search'/>

                <img className='Header__cart-icon' src={cartIcon} alt='cart'/>
            </div>
        </header>
    );
}

export default Header;