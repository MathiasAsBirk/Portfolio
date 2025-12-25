import styles from "./about.module.css";
import profileImg from "../../assets/profile.png";

function About() {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1>About Me</h1>
          <p>
            Practical and product-oriented Web Developer. I build clean, 
            structured interfaces that are easy to maintain and scale.
          </p>
        </header>

        <div className={styles.content}>
          {/* Left Column: Image */}
          <div className={styles.imageWrap}>
            <img src={profileImg} alt="Mathias Askham Birkeland" />
          </div>

          {/* Right Column: Bio & Info */}
          <div className={styles.textColumn}>
            <div className={styles.bio}>
              <p className={styles.lead}>
                I am a newly graduated Web Developer with a strong foundation in modern 
                frontend development, specifically React, JavaScript, and CSS Modules.
              </p>
              
              <p>
                My approach to development is straightforward: I favor stable, well-thought-out 
                solutions over clever tricks. I enjoy working independently and taking ownership 
                of my tasks, but I also value effective teamwork when building larger systems.
              </p>

              <p>
                With experience from both retail and office environments, I have learned to 
                keep a cool head under pressure and maintain structure in my daily workflows. 
                I am now looking for an opportunity to contribute my skills to a professional development team.
              </p>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoBox}>
                <h3>Education</h3>
                <p>Web Developer</p>
                <span>Media College Denmark (2025)</span>
              </div>
              
              <div className={styles.infoBox}>
                <h3>Core Focus</h3>
                <p>React & Clean Code</p>
                <span>Frontend / UI / UX</span>
              </div>

              <div className={styles.infoBox}>
                <h3>Location</h3>
                <p>Viborg, Denmark</p>
                <span>Open to relocation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;