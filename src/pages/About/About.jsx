import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1>About me</h1>
          <p>
            Frontend-focused web developer with a strong foundation in modern
            JavaScript and React.
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.imageWrap}>
            <img src="/profile.png" alt="Mathias" />
          </div>

          <div className={styles.text}>
            <p>
              I’m a newly graduated web developer with a strong focus on
              frontend development using React. I enjoy building clean,
              structured interfaces that are easy to maintain and scale.
            </p>

            <p>
              My approach is practical and product-oriented. I care about
              performance, accessibility and developer experience, and I
              prefer simple solutions that hold up over time.
            </p>

            <p>
              I’m comfortable working across the stack when needed, but my
              main strength is turning designs and requirements into solid,
              user-friendly applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
