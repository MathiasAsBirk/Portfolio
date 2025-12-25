import styles from "./portfolio.module.css";

// Import the screenshots
import f1Img from "../../assets/f1-preview.png";
import travelImg from "../../assets/travel-preview.png";

function Portfolio() {
  return (
    <section className={styles.page}>
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
            {/* Replaced div with Image */}
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
                <a href="https://YOUR_USERNAME.github.io/travel-blog" target="_blank">Live Demo</a>
                <a href="https://github.com/MathiasAsBirk/Travel_Reactg" target="_blank">View Code</a>
              </div>
            </div>
          </article>

          {/* PORTFOLIO */}
          <article className={styles.card}>
            {/* <img src={portfolioImg} alt="Portfolio" className={styles.image} /> */}
            
            <div className={styles.content}>
              <h3>Personal Portfolio</h3>
              <p>
                Designed to align with my CV and LinkedIn profile. 
                Features a custom design system using CSS variables and 
                React Router for seamless navigation.
              </p>

              <ul className={styles.tech}>
                <li>React</li>
                <li>Vite</li>
                <li>Responsive</li>
              </ul>

              <div className={styles.links}>
                 {/* This site is live, so we can link both if you want */}
                <a href="https://github.com/YOUR_USERNAME/Portfolio" target="_blank">View Code</a>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Portfolio;