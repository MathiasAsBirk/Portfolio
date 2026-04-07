import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.inner}>
          <span className={styles.label}>Contact</span>
        </div>
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Let's talk.
          </h2>
          <p className={styles.sub}>
            I'm based in Viborg, Denmark and open to new opportunities —
            full-time, freelance, or a good conversation about frontend work.
          </p>

          <div className={styles.links}>
            <a href="mailto:MathiasAsBirkeland@outlook.dk" className={styles.linkPrimary}>
              MathiasAsBirkeland@outlook.dk
            </a>
            <div className={styles.linkSecondaries}>
              <a
                href="https://www.linkedin.com/in/mathias-birkeland-88a054391"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkSecondary}
              >
                LinkedIn →
              </a>
              <a href="tel:+4526470363" className={styles.linkSecondary}>
                +45 26 47 03 63
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
