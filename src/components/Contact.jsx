import { useState } from 'react'; // Importação do useState
import styles from '../styles/Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <section id="contact" className={styles['contact']}>
      <div className={styles.container}>
        <h2 className={styles['section-title']}>Entre em Contato</h2>
        <form onSubmit={handleSubmit} className={styles['contact-form']}>
          <div className={styles['form-group']}>
            <label>Nome</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles['form-group']}>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles['form-group']}>
            <label>Mensagem</label>
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <div className={styles['button-container']}>
          <button type="submit" className={styles['cta-button']}>Enviar Mensagem</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
