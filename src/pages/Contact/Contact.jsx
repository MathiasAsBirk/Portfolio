import styles from "./contact.module.css";

function Contact() {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1>Get in Touch</h1>
          <p>
            I’m currently looking for new opportunities. Whether you have a question, 
            a project proposal, or just want to say hi, I’ll try my best to get back to you!
          </p>
          
          <div className={styles.status}>
            <span className={styles.dot}></span>
            Available for new projects
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.card}>
            <h3>Email</h3>
            <p className={styles.cardText}>Best way to reach me.</p>
            <a href="mailto:mathias@example.com" className={styles.link}>
              mathias@example.com
            </a>
          </div>

          <div className={styles.card}>
            <h3>LinkedIn</h3>
             <p className={styles.cardText}>Connect for professional updates.</p>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className={styles.link}>
              linkedin.com/in/mathias
            </a>
          </div>

          <div className={styles.card}>
            <h3>GitHub</h3>
             <p className={styles.cardText}>Check out my latest code.</p>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className={styles.link}>
              github.com/mathiasdev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;