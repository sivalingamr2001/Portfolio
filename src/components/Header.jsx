import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Particles from "../utils/particals/Particles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "activities",
    "contact",
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <Particles />
      <nav className={styles.nav}>
        <div className={styles.brand}>
          <img
            className={styles.icon}
            src="src/assets/profile.png"
            alt="profile"
          />
        </div>
        <div className={`${styles.menuItems} ${isOpen ? styles.open : ""}`}>
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className={styles.menuItem}
              onClick={toggleMenu}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? (
            <IoClose className={styles.closebtn} />
          ) : (
            <TiThMenuOutline />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
