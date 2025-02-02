import styles from '../styles/Projects.module.css';

function Projects() {
  const projects = [
    { title: "Sistema de Gestão", description: "Aplicação desktop desenvolvida em C# para gestão empresarial e análise de dados, diretamento ligado ao ERP Winthor" },
    { title: "E-commerce", description: "Loja virtual desenvolvida com React e Node.js" },
    { title: "App de Tarefas", description: "Aplicativo web para gerenciamento de tarefas" }
    
  ];

  return (
    <section id="projects" className={styles['projects']}>
      <div className={styles['container']}>
        <h2 className={styles['section-title']}>Projetos em Destaque</h2>
        <div className={styles['projects-grid']}>
          {projects.map((project, index) => (
            <div key={index} className={styles['project-card']}>
              <div className={styles['project-image']}></div>
              <div className={styles['project-info']}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;