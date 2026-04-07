import styles from './Hero.module.css';
import profileImg from '../assets/profile.png';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>

        <div className={styles.left}>
          <div className={styles.kicker}>
            <span className={styles.dot}></span>
            Frontend Developer · Viborg, Denmark
          </div>

          <h1 className={styles.title}>
            Frontend work that's structured, polished, and{' '}
            <em>actually maintainable.</em>
          </h1>

          <p className={styles.sub}>
            I build clean, responsive React interfaces with a focus on solid
            implementation, usability, and the details that make a UI feel right.
          </p>

          <div className={styles.actions}>
            <a href="#work" className={styles.btnPrimary}>View work</a>
            <a href="/cv.pdf" download className={styles.btnSecondary}>
              Download CV ↓
            </a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.photoFrame}>
            <img src={profileImg} alt="Mathias Birkeland" className={styles.photo} />
          </div>
          <div className={styles.avail}>
            <span className={styles.availDot}></span>
            Open to opportunities
          </div>
        </div>

      </div>

      <div className={styles.rule}></div>
    </section>
  );
}

export default Hero;
