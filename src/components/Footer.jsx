import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copy}>© 2025 Mathias Birkeland</span>
        <div className={styles.links}>
          <a
            href="https://github.com/MathiasAsBirk"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mathias-birkeland-88a054391"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a href="/cv.pdf" download className={styles.link}>
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
