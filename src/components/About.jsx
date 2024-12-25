import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className={styles.content}>
        <motion.img
          src="/src/assets/profile.png"
          alt="Your Name"
          className={styles.profileImage}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.div
          className={styles.bio}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>
            Hello! I am Sivalingam, a Front-End Developer I love creating
            interaction rich and responsive web experiences. Having a background
            in Master's degree in commerce with computer applications, I have
            developed the ability to transform complex problems into simple,
            elegant, and intuitive designs.
          </p>
          <p>
            I began my career in web development back 2023, and I have continued
            to be always learning and evolving to embrace new technology. I
            believe in the power of which touches on clean code, responsive
            designs, and the effects of great user experiences.
          </p>
          <p>
            Apart from coding, I usually editing videos and photos, taking
            tutions. I'm always excited to start new projects and work together
            on solving challenges.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
