import React, { useState } from 'react'
import './styles/header.css'
import { Link } from 'react-router-dom'
import './styles/header.css'
import './styles/nav.css'
import Logo from "./assets/Logo.png"

function Header({ title, content, image, button }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
    style={{
       backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url(${image})`
    }}>
      <nav>
        <div className="logo">
          <Link><img src={Logo} alt="Logo" /></Link>
        </div>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

        <div className={`links ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <Link to="/">Acceuil</Link>
          <Link to="/tech">Technologie</Link>
          <Link to="/academy">Academy</Link>
          <Link to="/studio">Studio</Link>
          <Link to="/careers">Careers</Link>
        </div>
      </nav>

      <div className="header">
        <div className="text">
          <h1>{title}</h1>
          <p>{content}</p>
          <button>{button}</button>
        </div>
      </div>
      
    </header>
  )
}

export default Header
