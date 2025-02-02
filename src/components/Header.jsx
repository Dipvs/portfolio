
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles['header']}>
      <nav className={styles['container']}>
        <div className={styles['logo']}>VS</div>
        <div className={styles['nav-links']}>
          <a href="#home">Home</a>
          <a href="#skills">Habilidades</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;