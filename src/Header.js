import React from 'react';
import logo from './public/images/Logo.png';

function Header() {
  return (
    <header>
      {
        <img src={logo} alt="website logo"></img>
      }
    </header>
  );
}

export default Header;
