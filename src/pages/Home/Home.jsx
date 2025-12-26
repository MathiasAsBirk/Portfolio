import styles from "./home.module.css";
import { Link } from 'react-router-dom';
import profileImg from "../../assets/profile.png";
import f1Img from "../../assets/f1-preview.png";
import travelImg from "../../assets/travel-preview.png";
import oldf1 from "../../assets/old-f1.png"

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
            <Link to="/portfolio" className={styles.primary}>
              View projects
            </Link>

            <Link to="/contact" className={styles.secondary}>
              Contact me
            </Link>
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

      {/* TECH STACK */}
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
            
            {/* PROJECT 1: F1 App */}
            <article className={styles.projectCard}>
              <img src={f1Img} alt="F1 App Preview" className={styles.cardImage} />
              
              <div className={styles.cardContent}>
                <h4>F1 Stats & Fan App</h4>
                <p>
                  My flagship project. A full-stack React application with live data, 
                  routing, and performance optimizations.
                </p>
                <div className={styles.cardLinks}>
                  <a href="https://github.com/MathiasAsBirk/F1_React" target="_blank">View Code (GitHub)</a>
                </div>
              </div>
            </article>

            {/* PROJECT 2: Travel Blog */}
            <article className={styles.projectCard}>
              <img src={travelImg} alt="Travel Blog Preview" className={styles.cardImage} />
              
              <div className={styles.cardContent}>
                <h4>Travel Blog</h4>
                <p>
                  A responsive, static travel blog focused on typography and 
                  image optimization. Hosted via GitHub Pages.
                </p>
                <div className={styles.cardLinks}>
                  <a href="https://mathiasasbirk.github.io/Travel_React/" target="_blank">Live Demo</a>
                  <a href="https://github.com/MathiasAsBirk/Travel_React" target="_blank">GitHub</a>
                </div>
              </div>
            </article>

            {/* PROJECT 3: F1 v1.0 (The Foundation) */}
            <article className={styles.projectCard}>
              <img src={oldf1} alt="F1 Version 1" className={styles.cardImage} />
  
              <div className={styles.cardContent}>
                <h4>F1 App (Version 1.0)</h4>
                  <p>
                    The initial React build focusing on backend integration and core logic. 
                    This version established the data structure that I later expanded with 
                    advanced UI/UX in the final version.
                  </p>
                <div className={styles.cardLinks}>
                  <a href="https://github.com/MathiasAsBirk/F1_React_Old" target="_blank" rel="noopener noreferrer">View v1 Code</a>
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