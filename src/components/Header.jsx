import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/header.css';
import './styles/nav.css';
import { Link } from 'react-router-dom';
import DefaultLogo from "./assets/Logo II.png";

function Header({
  // Contenu header
  title,
  content,
  image,
  button,
  link,
  file,
  // Personnalisation nav
  logo = DefaultLogo,
  logoWidth = "50px",
  navHeight = "80px",
  linkFontSize = "16px",
  linkColor = "rgb(22, 6, 100)",
  // links
  links = [
    { label: "Notre Groupe", to: "/" },
    { label: "Entreprises", to: "/tech" },
    { label: "Particuliers", to: "/ic" },
    { label: "Notre Impact", to: "/impact" },
    { label: "Jobs", to: "/careers" },
  ], 
  // Personnalisation header
  headerHeight = "100vh",
  overlayColor = "rgba(0, 0, 0, 0.3)",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Renommé pour éviter toute confusion

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <header
      style={{
        backgroundImage: image ? `linear-gradient(rgba(0, 0, 0, 0.1), ${overlayColor}), url(${image})` : 'none',
        height: headerHeight,
      }}
    >
      <nav style={{ height: navHeight }}>
        <div className="logo">
          <Link to="/">
            <img style={{ width: logoWidth }} src={logo} alt="Logo" />
          </Link>
        </div>

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div
          className={`links ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          style={{ fontSize: linkFontSize, gap: "40px" }}
        >
          {links.map((item, index) =>
            item.to.startsWith("#") ? (
              <a
                key={index}
                href={item.to}
                style={{ color: item.color || linkColor }}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={index}
                to={item.to}
                style={{ color: item.color || linkColor }}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </nav>

      <div className="header">
        <div className="text" data-aos="fade-up">
          {title && <h1>{title}</h1>}
          {content && <p>{content}</p>}
          
          {button && (
            <a 
              href={link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="header-button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                textDecoration: "none",
                display: "inline-block",
                color: isHovered ? "white" : "black",
                backgroundColor:  isHovered ? "#0131C3" : "white",
                marginTop: "20px",
                padding: "10px 20px",
                transition: "0.3s",
                fontWeight: "bold",
              }}
            >
              {button}
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;