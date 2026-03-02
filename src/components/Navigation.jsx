import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"; // we'll add styles here

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navigation">
      <Link to="/" className="logo">Trusted Medical</Link>

      {/* Hamburger button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Nav links */}
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/About">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </nav>
    </header>
  );
};

export default Navigation;
