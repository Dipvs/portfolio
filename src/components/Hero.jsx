import styles from '../styles/Hero.module.css';

function Hero() {
    return (
      <section id="home" className={styles.hero}>
        <div className={styles.container}>
          {/* Lado Esquerdo - Nome e Título */}
          <div className={styles.left}>
            <h1>Victor Silva</h1>
            <p>Desenvolvedor Web & Desktop Full Stack</p>
            <a href="#contact" className={styles['cta-button']}>Entre em Contato</a>
          </div>

          {/* Lado Direito - Resumo */}
          <div className={styles.right}>
            <p>
              Sou um desenvolvedor apaixonado por tecnologia, especializado em aplicações web e desktop. 
              Tenho experiência com diversas tecnologias modernas e busco sempre criar soluções inovadoras 
              e eficientes. 
            </p>
          </div>
        </div>
      </section>
    );
}

export default Hero;
