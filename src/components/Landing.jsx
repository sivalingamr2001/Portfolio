import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import styles from "./Landing.module.css";
import { LiaDownloadSolid } from "react-icons/lia";
import Modal from "../utils/ui/Modal";
import Resume from "../utils/Resume";

const Landing = () => {
  const roles = [
    "Front-End Developer",
    "React Developer",
    "UI Designer",
    "Web Enthusiast",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.landing}>
      {/* <h1 className={styles.portfolio}>Portfolio</h1> */}
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm [Your Name]
        </motion.h1>
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentRoleIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            {roles[currentRoleIndex]}
          </motion.h2>
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="about" smooth={true} duration={500}>
            <button className={styles.cta}>Learn More</button>
          </Link>
          <button className={styles.cta} onClick={openModal}>
            <LiaDownloadSolid /> Resume
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <Resume />
          </Modal>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
