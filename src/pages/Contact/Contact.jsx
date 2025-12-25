import styles from "./contact.module.css";

function Contact() {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1>Get in Touch</h1>
          <p>
            I am currently based in <strong>Viborg</strong> and looking for new opportunities. 
            Feel free to reach out directly by phone or email.
          </p>
          
          <div className={styles.status}>
            <span className={styles.dot}></span>
            Available for new projects
          </div>
        </header>

        <div className={styles.content}>
          {/* Card 1: Email */}
          <div className={styles.card}>
            <h3>Email</h3>
            <p className={styles.cardText}>Best way to reach me.</p>
            {/* I removed spaces from the email found in your CV to make it valid */}
            <a href="mailto:MathiasAsBirkeland@outlook.dk" className={styles.link}>
              MathiasAsBirkeland@outlook.dk
            </a>
          </div>

          {/* Card 2: Phone - Added from CV */}
          <div className={styles.card}>
            <h3>Phone</h3>
            <p className={styles.cardText}>Call or SMS.</p>
            <a href="tel:+4526470363" className={styles.link}>
              +45 26 47 03 63
            </a>
          </div>

          {/* Card 3: LinkedIn - Added specific link from CV */}
          <div className={styles.card}>
            <h3>LinkedIn</h3>
             <p className={styles.cardText}>Connect for professional updates.</p>
            <a 
              href="https://www.linkedin.com/in/mathias-birkeland-88a054391" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.link}
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;