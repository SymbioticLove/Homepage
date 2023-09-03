import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation-bar">
      <NavLink exact to="/" className="nav-link" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink
        to="/Lifestyle"
        className="nav-link"
        activeClassName="active-link"
      >
        Lifestyle
      </NavLink>
      <NavLink to="/Web" className="nav-link" activeClassName="active-link">
        Web Services
      </NavLink>
      <NavLink to="/About" className="nav-link" activeClassName="active-link">
        About Us
      </NavLink>
      <a
        href="https://shop.symbiotic.love"
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shop
      </a>
    </nav>
  );
};

export default Navigation;
