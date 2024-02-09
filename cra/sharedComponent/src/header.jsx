import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>L'église d'ICE SPICE</h1>
      <nav>
        <ul>
          <li><a href="#" className="nav-link">Accueil</a></li>
          <li><a href="#" className="nav-link">À propos</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
