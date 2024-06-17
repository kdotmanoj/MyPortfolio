import React from 'react';
import './NavBar.css';

function NavBar({ scrollToSection }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="nav-item" onClick={() => scrollToSection('home')}>
          <a href="#home">Home</a>
        </li>
        <li className="nav-item" onClick={() => scrollToSection('about')}>
          <a href="#about">About</a>
        </li>
        <li className="nav-item" onClick={() => scrollToSection('projects')}>
          <a href="#projects">Projects</a>
        </li>
        <li className="nav-item" onClick={() => scrollToSection('skills')}>
          <a href="#skills">Skills</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
