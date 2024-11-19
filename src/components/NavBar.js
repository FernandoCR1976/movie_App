// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import './NavBar.css';

const NavBar = ({ setSearchResults }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <h2>MyNetflix</h2>
      </div>
      <SearchBar setSearchResults={setSearchResults} />
    </nav>
  );
};

export default NavBar;
