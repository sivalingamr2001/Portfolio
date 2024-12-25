import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Projects.module.css';

import { projects } from "../content/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.projects}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            whileHover={{ scale: 1.05 }}
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
      {selectedProject && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.description}</p>
            <div className={styles.technologies}>
              {selectedProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <div className={styles.links}>
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live
              </a>
            </div>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

