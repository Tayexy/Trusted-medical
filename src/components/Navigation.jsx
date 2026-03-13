import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navigation.css"; // we'll add styles here
import { useAuth } from "../context/useAuth";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = async () => {
    if (user) {
      await logout();
      navigate("/"); // redirect after sign out
    } else {
      navigate("/auth");
    }
  };

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
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/contact">Contact</Link></li>
         <li 
           onClick={handleAuthClick} className="bg-gray-900 text-white px-5 cursor-pointer rounded-sm hover:underline">
            {user ? "Sign Out" : "Sign In"}
          
        </li>
      </nav>
    </header>
  );
};

export default Navigation;
