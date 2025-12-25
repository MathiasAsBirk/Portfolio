import styles from "./home.module.css";

function Home() {
  return (
    <>
    <section className={styles.hero}>
      <div className={styles.inner}>
        <span className={styles.kicker}>Open to new opportunities</span>

        <h1 className={styles.title}>
          Hi, I’m <span>Mathias</span>
        </h1>

        <h2 className={styles.subtitle}>
          Web Developer focused on React and fast, clean UI
        </h2>

        <p className={styles.description}>
          I ship modern web apps with performance, DX and UX aligned.
          No ceremony. Just solid components, testable logic and
          maintainable styling.
        </p>

        <div className={styles.actions}>
          <button className={styles.primary}>View projects</button>
          <button className={styles.secondary}>Contact</button>
        </div>
      </div>
    </section>

<section className={styles.about}>
  <div className={styles.aboutInner}>
    <div className={styles.imageWrap}>
      <img
        src="/profile.png"
        alt="Mathias"
      />
    </div>

    <div className={styles.content}>
      <h3>About</h3>

      <p>
        I build product-focused frontends with React. I iterate quickly and
        favor clear, maintainable code over clever tricks.
      </p>

      <p>
        Strong with React, Node, and MongoDB. I keep it simple: ship,
        measure, refine. Clean architecture, accessible UI, and performance
        where it counts.
      </p>
    </div>
  </div>
</section>

<section className={styles.tech}>
  <div className={styles.techInner}>
    <h3>Tech I use</h3>

    <div className={styles.grid}>
      <div className={styles.card}>React</div>
      <div className={styles.card}>JavaScript</div>
      <div className={styles.card}>CSS Modules</div>
      <div className={styles.card}>Node.js</div>
      <div className={styles.card}>MongoDB</div>
      <div className={styles.card}>Git & GitHub</div>
    </div>
  </div>
</section>

<section className={styles.projects}>
  <div className={styles.projectsInner}>
    <h3>Featured projects</h3>

    <div className={styles.projectGrid}>
      <article className={styles.projectCard}>
        <div className={styles.imagePlaceholder} />

        <div className={styles.projectContent}>
          <h4>F1 Stats & Fan App</h4>
          <p>
            React-based web app with live data, routing, and mini-games.
            Built with performance and clean component structure in mind.
          </p>

          <div className={styles.projectLinks}>
            <a href="#" target="_blank">Live</a>
            <a href="#" target="_blank">GitHub</a>
          </div>
        </div>
      </article>

      <article className={styles.projectCard}>
        <div className={styles.imagePlaceholder} />

        <div className={styles.projectContent}>
          <h4>Portfolio Website</h4>
          <p>
            Personal portfolio built with React, CSS Modules and
            React Router. Focused on clarity, structure and DX.
          </p>

          <div className={styles.projectLinks}>
            <a href="#" target="_blank">Live</a>
            <a href="#" target="_blank">GitHub</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

    </>
  );
}

export default Home;
