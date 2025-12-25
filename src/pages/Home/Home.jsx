import styles from "./home.module.css";
import profileImg from "../../assets/profile.png";

function Home() {
  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.kicker}>Newly Graduated Web Developer</span>
          <h1 className={styles.title}>
            Hi, I’m <span>Mathias</span>
          </h1>
          <h2 className={styles.subtitle}>
            Frontend Specialist focused on React, UI/UX, and Clean Code.
          </h2>
          <p className={styles.description}>
            I build modern web applications with a focus on performance and maintainability. 
            I take pride in delivering stable, well-thought-out solutions—no ceremony, 
            just solid components and testable logic.
          </p>
          <div className={styles.actions}>
            <button className={styles.primary}>View projects</button>
            <button className={styles.secondary}>Contact me</button>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className={styles.about}>
        <div className={styles.sectionInner}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h3 className={styles.sectionTitle}>About Me</h3>
              <p>
                I am a focused and practical developer based in <strong>Viborg, Denmark</strong>. 
                My approach is product-oriented: I prioritize user-friendly interfaces 
                and code that holds up over time.
              </p>
              <p>
                I thrive in environments where I can take responsibility for my tasks 
                and keep a cool head under pressure.
              </p>
            </div>
            <div className={styles.imageWrap}>
              <img src={profileImg} alt="Mathias Askham Birkeland" />
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK - Matches your CV Skills */}
      <section className={styles.tech}>
        <div className={styles.sectionInner}>
          <h3 className={styles.sectionTitle}>Tech Stack</h3>
          <div className={styles.techGrid}>
            <div className={styles.techCard}>React</div>
            <div className={styles.techCard}>JavaScript</div>
            <div className={styles.techCard}>CSS Modules</div>
            <div className={styles.techCard}>Node.js</div>
            <div className={styles.techCard}>GitHub</div>
            <div className={styles.techCard}>Figma</div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className={styles.projects}>
        <div className={styles.sectionInner}>
          <h3 className={styles.sectionTitle}>Featured Projects</h3>
          
          <div className={styles.projectGrid}>
            {/* Project 1 - Your F1 App */}
            <article className={styles.projectCard}>
              <div className={styles.cardImage}></div>
              <div className={styles.cardContent}>
                <h4>F1 Stats & Fan App</h4>
                <p>
                  A comprehensive React application featuring live data integration, 
                  routing, and custom mini-features. Built to demonstrate complex state management.
                </p>
                <div className={styles.cardLinks}>
                  <a href="#">Live Demo</a>
                  <a href="#">GitHub</a>
                </div>
              </div>
            </article>

            {/* Project 2 - Portfolio */}
            <article className={styles.projectCard}>
              <div className={styles.cardImage}></div>
              <div className={styles.cardContent}>
                <h4>Portfolio Website</h4>
                <p>
                  My personal portfolio built with React and CSS Modules. 
                  Designed to be clean, fast, and fully responsive across all devices.
                </p>
                <div className={styles.cardLinks}>
                  <a href="#">Live Demo</a>
                  <a href="#">GitHub</a>
                </div>
              </div>
            </article>

            {/* Project 3 - Task Manager (Matches Node.js skill) */}
            <article className={styles.projectCard}>
              <div className={styles.cardImage}></div>
              <div className={styles.cardContent}>
                <h4>Task Manager API</h4>
                <p>
                  A full-stack productivity tool using Node.js and MongoDB. 
                  Focuses on backend logic, API integration, and data structure.
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