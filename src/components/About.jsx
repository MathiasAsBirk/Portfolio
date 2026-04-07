import styles from './About.module.css';
import profileImg from '../assets/profile.png';

function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.inner}>
          <span className={styles.label}>About</span>
        </div>
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>

          <div className={styles.photoCol}>
            <div className={styles.photoFrame}>
              <img src={profileImg} alt="Mathias Birkeland" className={styles.photo} />
            </div>
            <div className={styles.meta}>
              <div className={styles.metaRow}>
                <span className={styles.metaKey}>Education</span>
                <span className={styles.metaVal}>Web Developer, Media College Denmark · 2025</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaKey}>Location</span>
                <span className={styles.metaVal}>Viborg, Denmark · Open to relocation</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaKey}>Focus</span>
                <span className={styles.metaVal}>React · Frontend UI · Clean code</span>
              </div>
            </div>
          </div>

          <div className={styles.textCol}>
            <h2 className={styles.title}>
              Practical, structured, and drawn to work that feels{' '}
              <em>genuinely considered.</em>
            </h2>

            <div className={styles.body}>
              <p>
                I'm a newly graduated web developer with a strong focus on React,
                JavaScript, and frontend structure. My approach is straightforward:
                understand the task, build it properly, and aim for solutions that
                are stable, readable, and maintainable — not just functional today.
              </p>
              <p>
                I enjoy taking ownership of what I build, working systematically
                from concept to delivery, and paying attention to the details that
                make a UI feel right. I'm particularly interested in the React
                ecosystem, UI/UX, web performance, and clean, standards-driven code.
              </p>
              <p>
                Experience from both retail and office environments has also shaped
                how I work: stay calm under pressure, keep structure in the
                day-to-day, and focus on delivering something solid.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
