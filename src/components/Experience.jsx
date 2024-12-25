import React from 'react';
import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experienceData = [
  {
    id: 1,
    company: "Self-learning",
    role: "Junior Front-End Developer",
    period: "Nov 2023 - Present",
    description: "creating responsive and accessible web applications.",
    achievements: [
      "Improved website performance by 40% through code optimization",
      "Implemented new design system, increasing development efficiency by 25%",
    ],
    icon: "src/assets/about/experience.png",
  },
  // Add more experiences here
];

const Experience = () => {
  return (
    <div className={styles.experience}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className={styles.timeline}>
        {experienceData.map((job, index) => (
          <motion.div
            key={job.id}
            className={styles.timelineItem}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.timelineContent}>
              <h3>{job.role}</h3>
              <h4>{job.company}</h4>
              <p className={styles.period}>{job.period}</p>
              <p>{job.description}</p>
              <ul>
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <img className={styles.icon} src={job.icon} alt="" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

