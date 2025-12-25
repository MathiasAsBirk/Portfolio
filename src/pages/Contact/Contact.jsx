import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1>Contact</h1>
          <p>
            Want to talk about a project, a position, or just say hi?
            You know where to find me.
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.card}>
            <h3>Email</h3>
            <a href="mailto:mathias@example.com">
              mathias@example.com
            </a>
          </div>

          <div className={styles.card}>
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">
              linkedin.com/in/yourprofile
            </a>
          </div>

          <div className={styles.card}>
            <h3>GitHub</h3>
            <a href="https://github.com/yourusername" target="_blank">
              github.com/yourusername
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
