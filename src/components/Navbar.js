import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../stylesheets/Navbar.css';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: 'about',
      text: 'About',
    },
  ];

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const showNav = {};
  if (navbarOpen) {
    showNav.display = 'block';
  } else {
    showNav.display = 'none';
  }
  return (
    <nav className={navbarOpen ? 'navBar' : ''}>
      <button type="button" className="nav-icon" onClick={handleToggle}>{navbarOpen ? <FaTimes /> : <FaBars />}</button>
      <ul style={showNav}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} onClick={handleToggle}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
