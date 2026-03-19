import styles from "./home.module.css";
import { Link } from "react-router-dom";
import profileImg from "../../assets/profile.png";
import f1Img from "../../assets/f1-preview.png";
import travelImg from "../../assets/travel-preview.png";
import oldf1 from "../../assets/old-f1.png";

function Home() {
  return (
    <div className={styles.container}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroDecor}></div>

        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <span className={styles.kicker}>Frontend Developer • React • UI Focus</span>

            <h1 className={styles.title}>
              Fresh, modern frontend work with <span>clean structure</span> and a sharp eye for UI.
            </h1>

            <p className={styles.lead}>
              I’m Mathias — a web developer from Viborg, Denmark, building responsive
              React interfaces with a focus on clarity, usability, and maintainable code.
            </p>

            <p className={styles.description}>
              I like frontend that feels polished without being overdone — clean layouts,
              solid logic, thoughtful details, and projects that actually feel finished.
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

          <div className={styles.heroCard}>
            <div className={styles.heroCardTop}>
              <span className={styles.heroDot}></span>
              <span className={styles.heroDot}></span>
              <span className={styles.heroDot}></span>
            </div>

            <div className={styles.heroCardBody}>
              <div className={styles.heroMiniLabel}>Currently focused on</div>
              <h2>React, responsive UI, and cleaner portfolio presentation.</h2>

              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <span>Focus</span>
                  <strong>Frontend</strong>
                </div>
                <div className={styles.heroStat}>
                  <span>Main stack</span>
                  <strong>React</strong>
                </div>
                <div className={styles.heroStat}>
                  <span>Based in</span>
                  <strong>Denmark</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.about}>
        <div className={styles.sectionInner}>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <span className={styles.sectionEyebrow}>About</span>

              <h2 className={styles.sectionTitle}>
                Frontend development with a practical mindset and a strong feel for clean UI.
              </h2>

              <p className={styles.aboutIntro}>
                I like building interfaces that feel simple, polished, and easy to use —
                while still being structured properly behind the scenes.
              </p>

              <div className={styles.aboutPoints}>
                <article className={styles.aboutPoint}>
                  <h3>How I work</h3>
                  <p>
                    I approach development in a grounded way: understand the task, build it
                    properly, and keep the result clean enough to scale without turning it
                    into a mess later.
                  </p>
                </article>

                <article className={styles.aboutPoint}>
                  <h3>What I care about</h3>
                  <p>
                    My main focus is React and modern frontend work, with attention to UI,
                    maintainability, and the kind of details that make a project feel more
                    complete and intentional.
                  </p>
                </article>

                <article className={styles.aboutPoint}>
                  <h3>What I aim for</h3>
                  <p>
                    I’m especially drawn to interfaces that feel smooth, balanced, and easy
                    to use — not just technically working, but actually pleasant to interact with.
                  </p>
                </article>
              </div>
            </div>

            <div className={styles.imageWrap}>
              <div className={styles.imageFrame}>
                <img src={profileImg} alt="Mathias Askham Birkeland" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section className={styles.tech}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionEyebrow}>Focus</span>

          <div className={styles.sectionHeadingRow}>
            <h2 className={styles.sectionTitle}>What I work with</h2>
            <p className={styles.sectionSupport}>
              A frontend-first toolkit built around responsive UI, structure, and cleaner implementation.
            </p>
          </div>

          <div className={styles.techGrid}>
            <article className={styles.techCard}>
              <h3>React</h3>
              <p>Component-based frontend work with structure, reusability, and clarity in mind.</p>
            </article>

            <article className={styles.techCard}>
              <h3>JavaScript</h3>
              <p>Readable logic, maintainable functionality, and practical problem-solving.</p>
            </article>

            <article className={styles.techCard}>
              <h3>CSS Modules</h3>
              <p>Scoped styling with more control, cleaner organization, and less chaos.</p>
            </article>

            <article className={styles.techCard}>
              <h3>Node.js</h3>
              <p>Useful backend understanding for APIs, data flow, and full-stack projects.</p>
            </article>

            <article className={styles.techCard}>
              <h3>GitHub</h3>
              <p>Version control, cleaner workflows, and projects built in a more structured way.</p>
            </article>

            <article className={styles.techCard}>
              <h3>Figma</h3>
              <p>Layout thinking, visual planning, and bridging design ideas into real UI.</p>
            </article>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className={styles.projects}>
        <div className={styles.sectionInner}>
          <span className={styles.sectionEyebrow}>Projects</span>

          <div className={styles.sectionHeadingRow}>
            <h2 className={styles.sectionTitle}>Selected work</h2>
            <p className={styles.sectionSupport}>
              A few projects that show how I think about structure, frontend presentation, and progression.
            </p>
          </div>

          <div className={styles.projectGrid}>
            <article className={styles.projectCard}>
              <div className={styles.cardImageWrap}>
                <img src={f1Img} alt="F1 App Preview" className={styles.cardImage} />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>Flagship Project</div>
                <h3>F1 Stats & Fan App</h3>
                <p>
                  A full-stack React application built around Formula 1 data, routing, and
                  frontend structure — combining useful content with a stronger UI layer.
                </p>

                <div className={styles.cardLinks}>
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

            <article className={styles.projectCard}>
              <div className={styles.cardImageWrap}>
                <img src={travelImg} alt="Travel Blog Preview" className={styles.cardImage} />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>Responsive Frontend</div>
                <h3>Travel Blog</h3>
                <p>
                  A cleaner, content-driven React build focused on layout, typography,
                  responsiveness, and image presentation. Hosted via GitHub Pages.
                </p>

                <div className={styles.cardLinks}>
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
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className={styles.projectCard}>
              <div className={styles.cardImageWrap}>
                <img src={oldf1} alt="F1 Version 1" className={styles.cardImage} />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>Foundation Build</div>
                <h3>F1 App v1.0</h3>
                <p>
                  The original build focused on backend integration, core logic, and data
                  structure — the foundation that later grew into a more refined version.
                </p>

                <div className={styles.cardLinks}>
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
    </div>
  );
}

export default Home;