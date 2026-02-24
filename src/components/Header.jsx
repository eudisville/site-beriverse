import React, { useState } from 'react'
import './styles/header.css'
import './styles/nav.css'
import { Link } from 'react-router-dom'
import DefaultLogo from "./assets/Logo II.png"

function Header({
  // Contenu header
  title,
  content,
  image,
  file,
  // Personnalisation nav
  logo = DefaultLogo,
  navBgColor = "white",
  navHeight = "80px",
  linkFontSize = "1rem",
  linkColor = "#000000",
  // links
  links = [
    { label: "Notre Groupe", to: "/" },
    { label: "For Business", to: "/tech" },
    { label: "Beriverse Academy", to: "/academy" },
    { label: "Beriverse X", to: "/studio" },
    { label: "Evènements", to: "/portfolio" },
    { label: "Jobs", to: "/careers" },
  ], 

  // Personnalisation header
  headerHeight = "100vh",
  overlayColor = "rgba(0, 0, 0, 0.3)",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), ${overlayColor}), url(${image})`,
        height: headerHeight,
      }}
    >
      <nav style={{ backgroundColor: navBgColor, height: navHeight }}>
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

  <div
    className={`links ${isOpen ? 'active' : ''}`}
    onClick={toggleMenu}
    style={{ fontSize: linkFontSize }}
  >
    {links.map((link, index) =>
      link.to.startsWith("#") ? (
        <a
          key={index}
          href={link.to}
          style={{ color: link.color || linkColor }}
        >
          {link.label}
        </a>
      ) : (
        <Link
          key={index}
          to={link.to}
          style={{ color: link.color || linkColor }}
        >
          {link.label}
        </Link>
      )
    )}
  </div>
      </nav>

      <div className="header">
        <div className="text">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </header>
  )
}

export default Header