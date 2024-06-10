import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavbarHorizontal.css"

const NavbarHorizontal = () => {
  return (
    <nav className="navbar-horizontal">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre Nosotros</Link></li>
        <li><Link to="/">E.P.E.S. Agraria N°1</Link></li>
        <li><Link to="/">Trabajos Realizados</Link></li>
        
      </ul>
    </nav>
  );
};

export default NavbarHorizontal;
