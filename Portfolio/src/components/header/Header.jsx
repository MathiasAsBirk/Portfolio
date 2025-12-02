import MotionFade from "../primitives/MotionFade";
import styles from "./header.module.css";

export default function Header(){
  return (
    <section className={`section`}>
      <div className="container">
        <MotionFade>
          <p className={styles.kicker}>Open to new opportunities</p>
          <h1 className={styles.title}>Hi, I’m <span>Mathias</span></h1>
          <h2 className={styles.sub}>Web Developer focused on React and fast, clean UI</h2>
          <p className={styles.lead}>
            I ship modern web apps with performance, DX and UX aligned. No ceremony.
            Just solid components, testable logic and maintainable styling.
          </p>
          <div className={styles.ctaRow}>
            <a className="btn btn--primary" href="/portfolio">View projects</a>
            <a className="btn btn--ghost" href="/contact">Contact</a>
          </div>
        </MotionFade>
      </div>
    </section>
  );
}
