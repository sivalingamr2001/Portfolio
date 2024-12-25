import React, { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button className={styles.themeToggle} onClick={toggleDarkMode}>
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;

