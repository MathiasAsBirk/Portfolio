import styles from "./about.module.css";
import profileImg from "../../assets/profile.png";

function About() {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1>About Me</h1>
          <p>
            Frontend-focused web developer with a strong foundation in modern
            JavaScript and React.
          </p>
        </header>

        <div className={styles.content}>
          {/* Left Column: Image */}
          <div className={styles.imageWrap}>
            <img src={profileImg} alt="Mathias" />
          </div>

          {/* Right Column: Bio & Info */}
          <div className={styles.textColumn}>
            <div className={styles.bio}>
              <p className={styles.lead}>
                I’m a newly graduated web developer with a strong focus on
                frontend development using React.
              </p>
              
              <p>
                My approach is practical and product-oriented. I care about
                performance, accessibility, and developer experience. I
                prefer simple solutions that hold up over time rather than
                clever tricks that are hard to maintain.
              </p>

              <p>
                I’m comfortable working across the stack when needed, but my
                main strength is turning designs and requirements into solid,
                user-friendly applications.
              </p>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoBox}>
                <h3>Education</h3>
                <p>Web Development Graduate</p>
                <span>2023 - 2025</span>
              </div>
              
              <div className={styles.infoBox}>
                <h3>Focus</h3>
                <p>React Ecosystem & UI/UX</p>
              </div>

              <div className={styles.infoBox}>
                <h3>Location</h3>
                <p>Denmark</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;