import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='Container'>
       <h1>Zymo Feature Showcase</h1>
    <header className="header">
      <nav>
        <ul>
        <img src="./img/logo.png" alt="Zymo Logo" className="logo" />
          <li><a href="#feature">Feature</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#screenshots">Screenshots</a></li>
          <li><a href="#cta">Learn More</a></li>
        </ul>
      </nav>
      
    </header>
    </div>
  );
}

export default Header;
