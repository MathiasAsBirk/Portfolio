import styles from "./contact.module.css";

function Contact() {
  return (
    <section className={styles.page}>
      <div className={styles.pageDecor}></div>

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Contact</span>

          <h1>Let’s connect if you’re looking for a frontend developer with a clean, practical approach.</h1>

          <p>
            I’m based in Viborg, Denmark, and open to new opportunities. The easiest way
            to reach me is by email, phone, or LinkedIn.
          </p>

          <div className={styles.status}>
            <span className={styles.dot}></span>
            Available for new opportunities
          </div>
        </header>

        <div className={styles.content}>
          <article className={styles.card}>
            <div className={styles.cardLabel}>Email</div>
            <h2>Best way to reach me</h2>
            <p className={styles.cardText}>
              For job opportunities, questions, or general contact.
            </p>
            <a href="mailto:MathiasAsBirkeland@outlook.dk" className={styles.link}>
              MathiasAsBirkeland@outlook.dk
            </a>
          </article>

          <article className={styles.card}>
            <div className={styles.cardLabel}>Phone</div>
            <h2>Call or message</h2>
            <p className={styles.cardText}>
              Useful for direct contact and quick follow-up.
            </p>
            <a href="tel:+4526470363" className={styles.link}>
              +45 26 47 03 63
            </a>
          </article>

          <article className={styles.card}>
            <div className={styles.cardLabel}>LinkedIn</div>
            <h2>Professional profile</h2>
            <p className={styles.cardText}>
              Connect with me for updates, networking, and work-related contact.
            </p>
            <a
              href="https://www.linkedin.com/in/mathias-birkeland-88a054391"
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Connect on LinkedIn
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contact;