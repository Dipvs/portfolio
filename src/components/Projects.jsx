import styles from '../styles/Projects.module.css';

function Projects() {
  const projects = [
    { 
      title: "Sistema de Gestão", 
      technologies: "C#, ERP Winthor", 
      description: "Aplicação desktop desenvolvida para otimizar a gestão empresarial, integrando-se diretamente ao ERP Winthor para análise de dados e processos."
    },
    { 
    title: "Exibição de Relatórios", 
      technologies: "Node.js, React", 
      description: "Plataforma web que auxilia vendedores no acompanhamento de metas diárias, proporcionando uma interface intuitiva e informações em tempo real."
    },
    { 
      title: "Visualização de Dados", 
      technologies: "Django, React, Plotly, Dash", 
      description: "Aplicação web interativa para visualização e análise de dados de vendas, permitindo insights estratégicos por meio de gráficos dinâmicos."
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.projectImage}></div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectTechnologies}><strong>Tecnologias:</strong> {project.technologies}</p>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
