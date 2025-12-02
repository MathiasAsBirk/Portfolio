import styles from "./footer.module.css";
export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <span>© {new Date().getFullYear()} Mathias — Web Developer</span>
          <span className={styles.dot}>•</span>
          <a href="/contact">Available for work</a>
        </div>
      </div>
    </footer>
  );
}
