import styles from "./portfolio.module.css";
import f1Img from "../../assets/f1-preview.png";
import travelImg from "../../assets/travel-preview.png";
import oldf1 from "../../assets/old-f1.png";

function Portfolio() {
  return (
    <section id="projects" className={styles.page}>
      <div className={styles.pageDecor}></div>

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Portfolio</span>

          <div className={styles.headerRow}>
            <div>
              <h1>Selected projects built with frontend structure and usability in mind.</h1>
              <p>
                A small selection of work that shows how I approach React development,
                responsive design, UI structure, and cleaner implementation across different types of projects.
              </p>
            </div>

            <div className={styles.headerCard}>
              <span className={styles.headerCardLabel}>What matters to me</span>
              <ul>
                <li>Clean frontend structure</li>
                <li>Responsive layout and UI flow</li>
                <li>Maintainable code over quick hacks</li>
              </ul>
            </div>
          </div>
        </header>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={f1Img} alt="F1 App" className={styles.image} />
            </div>

            <div className={styles.content}>
              <div className={styles.meta}>Flagship Project</div>

              <h3>F1 Stats & Fan App (v2.0)</h3>

              <p>
                My main React project — rebuilt with a stronger structure and a clearer frontend direction.
                It brings together Formula 1 data, routing, and UI presentation in a more polished, scalable way.
              </p>

              <ul className={styles.tech}>
                <li>React</li>
                <li>Node.js</li>
                <li>REST API</li>
              </ul>

              <div className={styles.links}>
                <a
                  href="https://github.com/MathiasAsBirk/F1_React"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={travelImg} alt="Travel Blog" className={styles.image} />
            </div>

            <div className={styles.content}>
              <div className={styles.meta}>Responsive Frontend</div>

              <h3>Travel Blog</h3>

              <p>
                A lighter React project focused on layout, typography, responsiveness, and visual balance.
                Built to feel clean across screen sizes without leaning on heavy UI libraries.
              </p>

              <ul className={styles.tech}>
                <li>React</li>
                <li>CSS Modules</li>
                <li>GitHub Pages</li>
              </ul>

              <div className={styles.links}>
                <a
                  href="https://mathiasasbirk.github.io/Travel_React/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/MathiasAsBirk/Travel_React"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={oldf1} alt="F1 Version 1" className={styles.image} />
            </div>

            <div className={styles.content}>
              <div className={styles.meta}>Foundation Build</div>

              <h3>F1 App (v1.0)</h3>

              <p>
                The original version focused more on core logic, API integration, and data structure.
                It laid the groundwork for the later rebuild with a more refined UI and stronger frontend presentation.
              </p>

              <ul className={styles.tech}>
                <li>React</li>
                <li>API Integration</li>
                <li>CSS Grid</li>
              </ul>

              <div className={styles.links}>
                <a
                  href="https://github.com/MathiasAsBirk/F1_React_Old"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View v1 Code
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;