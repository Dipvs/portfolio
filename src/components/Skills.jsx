import styles from '../styles/Skills.module.css';


function Skills() {
  const skills = [
    { title: "Desenvolvimento Web", description: "HTML, CSS, JavaScript, React, Node.js" },
    { title: "Desenvolvimento Desktop", description: "C#, .NET, Windows Forms" },
    { title: "Banco de Dados", description: "SQL Server, MySQL, MongoDB, Oracle" }
  ];

  return (
    <section id="skills" className={styles['skills']}>
      <div className={styles['container']}>
        <h2 className={styles['section-title']}>Minhas Habilidades</h2>
        <div className={styles['skills-grid']}>
          {skills.map((skill, index) => (
            <div key={index} className={styles['skill-card']}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;