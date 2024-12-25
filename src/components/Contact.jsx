import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { TbSend } from "react-icons/tb";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className={styles.contact}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <div className={styles.contactContent}>
        <motion.form
          className={styles.contactForm}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.inputs}>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.textareas}>
            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button className={styles.send} type="submit">
              <TbSend
                className={styles.icon}
              />
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
