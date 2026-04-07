import styles from './Stack.module.css';

const primary = ['React', 'JavaScript', 'CSS Modules', 'HTML'];
const secondary = ['Node.js', 'Git & GitHub', 'Figma', 'Vite', 'API integration', 'Responsive design'];

function Stack() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <div className={styles.inner}>
          <span className={styles.label}>Stack</span>
        </div>
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.intro}>
            Frontend-first. I work primarily in React with a focus on clean structure,
            CSS that scales, and code that's readable six months later.
          </p>

          <div className={styles.groups}>
            <div className={styles.group}>
              <span className={styles.groupLabel}>Core</span>
              <div className={styles.tags}>
                {primary.map((s) => (
                  <span key={s} className={`${styles.tag} ${styles.tagPrimary}`}>{s}</span>
                ))}
              </div>
            </div>

            <div className={styles.group}>
              <span className={styles.groupLabel}>Also working with</span>
              <div className={styles.tags}>
                {secondary.map((s) => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
