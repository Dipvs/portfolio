import styles from '../styles/Footer.module.css';

function Footer() {
    return (
      <footer className={styles['social-links']}>
        <div className={styles.container}>
          <p>© 2025 Victor Silva. Todos os direitos reservados.</p>
          <div className={styles['social-links']}>
          <a href="https://www.linkedin.com/in/victor-silva-8b34212b7/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/Dipvs" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;