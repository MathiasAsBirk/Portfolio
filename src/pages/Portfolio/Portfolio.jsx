import styles from "./portfolio.module.css";

function Portfolio() {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h1>My Projects</h1>
          <p>
            A selection of projects focused on clean architecture,
            performance, and real-world use cases.
          </p>
        </header>

        <div className={styles.grid}>
          {/* Project 1 */}
          <article className={styles.card}>
            <div className={styles.image} />
            <div className={styles.content}>
              <h3>F1 Stats & Fan App</h3>
              <p>
                React-based web app with live data, routing, and mini-games.
                Built with performance and maintainability in mind.
              </p>
              
              <ul className={styles.tech}>
                <li>React</li>
                <li>CSS Modules</li>
                <li>API</li>
              </ul>

              <div className={styles.links}>
                <a href="#" target="_blank">Live Demo</a>
                <a href="#" target="_blank">GitHub</a>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className={styles.card}>
            <div className={styles.image} />
            <div className={styles.content}>
              <h3>Portfolio Website</h3>
              <p>
                Personal portfolio built with React and React Router.
                Focus on structure, clarity, and developer experience.
              </p>

              <ul className={styles.tech}>
                <li>React</li>
                <li>Router</li>
                <li>CSS Modules</li>
              </ul>

              <div className={styles.links}>
                <a href="#" target="_blank">Live Demo</a>
                <a href="#" target="_blank">GitHub</a>
              </div>
            </div>
          </article>

          {/* Project 3 */}
          <article className={styles.card}>
            <div className={styles.image} />
            <div className={styles.content}>
              <h3>Task Manager Dashboard</h3>
              <p>
                A productivity dashboard utilizing Node.js and MongoDB. 
                Features drag-and-drop task management and real-time updates.
              </p>

              <ul className={styles.tech}>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express</li>
              </ul>

              <div className={styles.links}>
                <a href="#" target="_blank">Live Demo</a>
                <a href="#" target="_blank">GitHub</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;