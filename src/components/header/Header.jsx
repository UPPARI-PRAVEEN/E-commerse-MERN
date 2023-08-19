


import React, { useState } from 'react';
import { AiOutlineMenu, } from 'react-icons/ai';
import { IoPerson } from 'react-icons/io5';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpeg'
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>
      <button className="navBtn" onClick={toggleMenu}>
        <AiOutlineMenu />
      </button>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? 'navPhoneComes' : ''}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
      <img src={logo} alt="logo" />
    </motion.div>
    <div>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        Home
      </Link>
      <Link to="/about" onClick={() => setMenuOpen(false)} >
        About
      </Link>
      <Link to="/products" onClick={() => setMenuOpen(false)}>
        Products
      </Link>
      <Link to="/checkout" onClick={() => setMenuOpen(false)} >
        Checkout
      </Link>
      <Link to="/login" onClick={() => setMenuOpen(false)} >
        Login
      </Link>


    </div>

  </>
);

export default Header;
