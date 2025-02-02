import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import { Moon, Sun } from 'lucide-react';

function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <div className={styles.logo}>VS</div>
        <div className={styles['nav-links']}>
          <a href="#home">Home</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
          <button
            onClick={toggleTheme}
            className={styles['theme-toggle']}
            aria-label="Alternar tema"
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;