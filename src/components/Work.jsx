import styles from './Work.module.css';
import f1Img from '../assets/f1-preview.png';
import travelImg from '../assets/travel-preview.png';

const projects = [
  {
    num: '01',
    title: 'F1 Stats & Fan App',
    description:
      'A full-stack React application built around live Formula 1 data. The focus was on routing, REST API integration, and building a UI that makes dense data actually readable and enjoyable to navigate.',
    what: 'Built the full frontend architecture from scratch — component structure, routing with React Router, API data handling, and a responsive layout that holds up across devices.',
    stack: ['React', 'Node.js', 'REST API', 'CSS Modules'],
    links: [{ label: 'View code', href: 'https://github.com/MathiasAsBirk/F1_React' }],
    image: f1Img,
    imageAlt: 'F1 Stats App preview',
  },
  {
    num: '02',
    title: 'Travel Blog',
    description:
      'A content-driven React build focused entirely on layout, typography, and image presentation. No UI libraries — just clean CSS Modules and a deliberate approach to responsive design.',
    what: 'Designed and built the layout system, handled image performance, and kept the CSS organised and scalable without reaching for a framework.',
    stack: ['React', 'CSS Modules', 'GitHub Pages'],
    links: [
      { label: 'Live demo', href: 'https://mathiasasbirk.github.io/Travel_React/' },
      { label: 'GitHub', href: 'https://github.com/MathiasAsBirk/Travel_React' },
    ],
    image: travelImg,
    imageAlt: 'Travel Blog preview',
  },
];

function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.inner}>
          <span className={styles.label}>Selected work</span>
        </div>
      </div>

      <div className={styles.inner}>
        {projects.map((p) => (
          <article key={p.num} className={styles.project}>
            <div className={styles.projectLeft}>
              <span className={styles.num}>{p.num}</span>
              <h2 className={styles.title}>{p.title}</h2>
              <p className={styles.desc}>{p.description}</p>

              <div className={styles.what}>
                <span className={styles.whatLabel}>What I did</span>
                <p>{p.what}</p>
              </div>

              <ul className={styles.stack}>
                {p.stack.map((s) => (
                  <li key={s} className={styles.stackTag}>{s}</li>
                ))}
              </ul>

              <div className={styles.links}>
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.projectRight}>
              <div className={styles.imageWrap}>
                <img src={p.image} alt={p.imageAlt} className={styles.image} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;
