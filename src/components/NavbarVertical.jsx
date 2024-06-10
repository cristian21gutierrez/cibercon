import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavbarVertical.css"

const NavbarVertical = () => {
  return (
    <nav className="navbar-vertical">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/">Inicio</Link></li>
        
      </ul>
    </nav>
  );
};

export default NavbarVertical;
