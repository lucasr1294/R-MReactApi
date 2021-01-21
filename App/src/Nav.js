import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
    <nav>
        <Link to='/'>
            <h3 className='about-personajes'>Logo</h3>
        </Link>
        <ul className='nav-links'>
            <Link style={navStyle} to='/about'>
                <li className='about-personajes'>About</li>
            </Link>
            <Link style={navStyle} to='/shop'>
                <li className='about-personajes'>Personajes</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;