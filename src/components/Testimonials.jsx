import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Project Manager at Company X',
    quote: 'Working with [Your Name] was a pleasure. Their attention to detail and ability to deliver high-quality work on time made our project a success.',
    image: '/path-to-john-doe-image.jpg',
  },
  // Add more testimonials here
];

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Testimonials
      </motion.h2>
      <div className={styles.testimonialGrid}>
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className={styles.testimonialCard}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={testimonial.image} alt={testimonial.name} className={styles.testimonialImage} />
            <p className={styles.quote}>"{testimonial.quote}"</p>
            <p className={styles.name}>{testimonial.name}</p>
            <p className={styles.role}>{testimonial.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

