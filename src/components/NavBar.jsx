import React, {useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

export default function Navbar(){
    
   const [nav,setnav]= useState(false);

    const changeBackGround = ()=> {
        if (window.scrollY >=50){
            setnav(true);
        } else {
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackGround);

    return( 
        <>
            <nav className={nav ? 'nav active':'nav' }>
            <Link to='main' className='logo' smooth={true} duration={2000} >
                <img src={logo} alt="" />
            </Link>
            <input className="menu-btn" type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>    
            </label>
            <ul className='menu'>
                <li>
                    <Link to='main' smooth={true} duration={1000}>Home</Link>
                </li>
                <li>
                    <Link to='features'smooth={true} duration={1000}>Features</Link>
                </li>
                <li>
                    <Link to='presentation'smooth={true} duration={1000}>Offer</Link>
                </li>
                <li>
                    <Link to='about'smooth={true} duration={1000}>About</Link>
                </li>
                <li>
                    <Link to='contact'smooth={true} duration={1000}>Contact</Link>
                </li>
            </ul> 
            </nav>
        </>
    )
}