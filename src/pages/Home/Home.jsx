import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.kicker}>Open to new opportunities</span>
          <h1 className={styles.title}>
            Hi, I’m <span>Mathias</span>
          </h1>
          <h2 className={styles.subtitle}>
            Web Developer focused on React and fast, clean UI.
          </h2>
          <p className={styles.description}>
            I ship modern web apps with performance, DX and UX aligned.
            No ceremony. Just solid components, testable logic and
            maintainable styling.
          </p>
          <div className={styles.actions}>
            <button className={styles.primary}>View projects</button>
            <button className={styles.secondary}>Contact me</button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className={styles.about}>
        <div className={styles.sectionInner}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h3 className={styles.sectionTitle}>About Me</h3>
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
            <div className={styles.imageWrap}>
              <img src="/profile.png" alt="Mathias" />
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className={styles.tech}>
        <div className={styles.sectionInner}>
          <h3 className={styles.sectionTitle}>Tech Stack</h3>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>React</div>
            <div className={styles.techCard}>JavaScript</div>
            <div className={styles.techCard}>CSS Modules</div>
            <div className={styles.techCard}>Node.js</div>
            <div className={styles.techCard}>MongoDB</div>
            <div className={styles.techCard}>Git & GitHub</div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION - NOW 3 COLUMNS */}
      <section className={styles.projects}>
        <div className={styles.sectionInner}>
          <h3 className={styles.sectionTitle}>Featured Projects</h3>
          
          <div className={styles.projectGrid}>
            {/* Project 1 */}
            <article className={styles.projectCard}>
              <div className={styles.cardImage}></div>
              <div className={styles.cardContent}>
                <h4>F1 Stats & Fan App</h4>
                <p>
                  React-based web app with live data, routing, and mini-games.
                  Built for speed.
                </p>
                <div className={styles.cardLinks}>
                  <a href="#">Live Demo</a>
                  <a href="#">GitHub</a>
                </div>
              </div>
            </article>

            {/* Project 2 */}
            <article className={styles.projectCard}>
              <div className={styles.cardImage}></div>
              <div className={styles.cardContent}>
                <h4>Portfolio Website</h4>
                <p>
                  Personal portfolio built with React and CSS Modules. 
                  Focused on clarity and DX.
                </p>
                <div className={styles.cardLinks}>
                  <a href="#">Live Demo</a>
                  <a href="#">GitHub</a>
                </div>
              </div>
            </article>

            {/* Project 3 - NEW */}
            <article className={styles.projectCard}>
              <div className={styles.cardImage}></div>
              <div className={styles.cardContent}>
                <h4>Task Manager</h4>
                <p>
                  A productivity dashboard using Node.js and MongoDB. 
                  Features drag-and-drop.
                </p>
                <div className={styles.cardLinks}>
                  <a href="#">Live Demo</a>
                  <a href="#">GitHub</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;