import styles from "./about.module.css";
import profileImg from "../../assets/profile.png";

function About() {
  return (
    <section className={styles.page}>
      <div className={styles.pageDecor}></div>

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>About</span>

          <div className={styles.headerRow}>
            <div>
              <h1>Frontend-focused, practical, and drawn to interfaces that feel clean and well-built.</h1>
              <p>
                I build with a structured mindset and a clear preference for frontend work that feels polished,
                maintainable, and easy to use — without unnecessary noise.
              </p>
            </div>

            <div className={styles.headerCard}>
              <span className={styles.headerCardLabel}>Current direction</span>
              <ul>
                <li>React and modern frontend development</li>
                <li>UI structure and cleaner implementation</li>
                <li>Interfaces that feel smooth and intentional</li>
              </ul>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.imageWrap}>
            <div className={styles.imageFrame}>
              <img src={profileImg} alt="Mathias Askham Birkeland" />
            </div>
          </div>

          <div className={styles.textColumn}>
            <div className={styles.bio}>
              <p className={styles.lead}>
                I’m a newly graduated web developer with a strong focus on React, JavaScript,
                and frontend structure that stays clean as a project grows.
              </p>

              <p>
                My approach is pretty straightforward: understand the task, build it properly,
                and aim for solutions that are stable, readable, and maintainable rather than clever for the sake of it.
              </p>

              <p>
                I enjoy working independently and taking ownership of what I build, but I also value
                good collaboration when a project needs shared direction and consistency.
              </p>

              <p>
                Experience from both retail and office environments has also shaped how I work:
                stay calm under pressure, keep structure in the day-to-day, and focus on delivering something solid.
              </p>
            </div>

            <div className={styles.infoGrid}>
              <article className={styles.infoBox}>
                <h3>Education</h3>
                <p>Web Developer</p>
                <span>Media College Denmark · 2025</span>
              </article>

              <article className={styles.infoBox}>
                <h3>Core Focus</h3>
                <p>React & Frontend UI</p>
                <span>Structure · usability · maintainability</span>
              </article>

              <article className={styles.infoBox}>
                <h3>Location</h3>
                <p>Viborg, Denmark</p>
                <span>Open to relocation</span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;