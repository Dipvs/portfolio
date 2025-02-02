import styles from '../styles/Footer.module.css';

function Footer() {
    return (
      <footer className={styles['social-links']}>
        <div className={styles.container}>
          <p>© 2025 Victor Silva. Todos os direitos reservados.</p>
          <div className={styles['social-links']}>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;