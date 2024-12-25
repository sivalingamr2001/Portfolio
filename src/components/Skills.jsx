import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillsData = [
  { name: "HTML", icon: "html5", category: "frontend" },
  { name: "CSS", icon: "css3", category: "frontend" },
  { name: "JavaScript", icon: "javascript", category: "frontend" },
  { name: "React", icon: "react", category: "frontend" },
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Express", icon: "express", category: "backend", useOriginal: true },
  { name: "MongoDB", icon: "mongodb", category: "database" },
  { name: "Git", icon: "git", category: "tools" },
  { name: "MySQL", icon: "mysql", category: "database", useOriginal: true },
];

const Skills = () => {
  const [filter, setFilter] = useState('all');

  const filteredSkills = filter === 'all' ? skillsData : skillsData.filter(skill => skill.category === filter);

  return (
    <div className={styles.skills}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className={styles.filterButtons}>
        {["all", "frontend", "backend", "database", "tools"].map((category) => (
          <button
            key={category}
            className={`${styles.filterButton} ${
              filter === category ? styles.active : ""
            }`}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <motion.div
        className={styles.skillsGrid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={styles.skillItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
              <i
          className={`devicon-${skill.icon}-${skill.useOriginal ? "original" : "plain"} colored`}
          title={skill.name}
        ></i>
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;

