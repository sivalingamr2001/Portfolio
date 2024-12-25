import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Activities.module.css";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { activities } from "../content/activities";

const Activities = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1 < activities.length ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : activities.length - 1));
  };

  return (
    <div className={styles.activities}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Activities
      </motion.h2>
      <div className={styles.activityGrid}>
        <button className={styles.navButton} onClick={prevSlide}>
          <ChevronsLeft className={styles.navIcon} />
        </button>
        <motion.div
          key={activities[activeSlide].title}
          className={styles.activityCard}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.activityTitle}>
            {activities[activeSlide].title}
          </h3>
          <p className={styles.activityText}>{activities[activeSlide].text}</p>
        </motion.div>
        <button className={styles.navButton} onClick={nextSlide}>
          <ChevronsRight className={styles.navIcon} />
        </button>
      </div>
    </div>
  );
};

export default Activities;
