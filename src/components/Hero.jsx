import styles from '../styles/Hero.module.css';

function Hero() {
    return (
      <section id="home" className={styles['hero']}>
        <div className={styles['container']}>
          <h1>Victor Silva</h1>
          <p>Desenvolvedor Web & Desktop Full Stack</p>
          <a href="#contact" className={styles['cta-button']}>Entre em Contato</a>
        </div>
      </section>
    );
  }

  export default Hero;