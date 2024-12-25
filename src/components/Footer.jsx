import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "./Footer.module.css";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <motion.div
        className={styles.contactInfo}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className={styles.profile}>
          <h1 className={styles.title}>Sivalingam R</h1>
          <p>Virudhunagar, Tamil Nadu, India</p>
          <p>+91 7339396194 | sivalingam.raj@hotmail.com</p>
        </div>
        <div className={styles.socials}>
          <a href="https://aedin.com/in/sivalingamr2001">
            <FaLinkedinIn className={styles.icon} />
          </a>
          <a href="https://github.com/sivalingamr2001">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/innocent_specs">
            <FaInstagram className={styles.icon} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;