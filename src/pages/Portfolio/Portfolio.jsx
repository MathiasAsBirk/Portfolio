import styles from "./portfolio.module.css";
import f1Img from "../../assets/f1-preview.png";
import travelImg from "../../assets/travel-preview.png";
import oldf1 from "../../assets/old-f1.png"

function Portfolio() {
  return (
    <section id="projects" className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1>My Projects</h1>
          <p>
            A selection of my work ranging from full-stack applications to 
            responsive static sites.
          </p>
        </header>

        <div className={styles.grid}>
          
          {/* F1 APP */}
          <article className={styles.card}>
            <img src={f1Img} alt="F1 App" className={styles.image} />
            
            <div className={styles.content}>
              <h3>F1 Stats & Fan App (v2.0)</h3>
              <p>
                My flagship project. A full-stack React application with live data, 
                routing, and performance optimizations. Rebuilt from scratch to 
                ensure clean architecture.
              </p>
              
              <ul className={styles.tech}>
                <li>React</li>
                <li>Node.js</li>
                <li>Rest API</li>
              </ul>

              <div className={styles.links}>
                <a href="https://github.com/MathiasAsBirk/F1_React" target="_blank">View Code</a>
              </div>
            </div>
          </article>

          {/* TRAVEL BLOG */}
          <article className={styles.card}>
            <img src={travelImg} alt="Travel Blog" className={styles.image} />
            
            <div className={styles.content}>
              <h3>Travel Blog</h3>
              <p>
                A lightweight blog template. I focused on semantic HTML and 
                responsive CSS Grid/Flexbox to ensure it looks great on mobile 
                devices without using heavy UI libraries.
              </p>

              <ul className={styles.tech}>
                <li>React</li>
                <li>CSS Modules</li>
                <li>GitHub Pages</li>
              </ul>

              <div className={styles.links}>
                <a href="https://mathiasasbirk.github.io/Travel_React/" target="_blank">Live Demo</a>
                <a href="https://github.com/MathiasAsBirk/Travel_React" target="_blank">View Code</a>
              </div>
            </div>
          </article>

          {/* PROJECT 3: F1 v1.0 (The Foundation) */}
          <article className={styles.card}>
  <img src={oldf1} alt="F1 Version 1" className={styles.image} />
  
  <div className={styles.content}>
    <h3>F1 App (Version 1.0)</h3>
    <p>
      The initial React build focusing on backend integration and core logic. 
      This version established the data structure that I later expanded with 
      advanced UI/UX in the final version.
    </p>

    <ul className={styles.tech}>
      <li>React</li>
      <li>API Integration</li>
      <li>CSS Grid</li>
    </ul>

    <div className={styles.links}>
      <a href="https://github.com/MathiasAsBirk/F1_React_Old" target="_blank" rel="noopener noreferrer">View v1 Code</a>
    </div>
  </div>
</article>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;