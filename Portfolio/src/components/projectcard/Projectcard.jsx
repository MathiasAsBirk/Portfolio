import MotionFade from "../primitives/MotionFade";
import styles from "./projectcard.module.css";

export default function ProjectCard({ title, desc, tech=[], href }){
  return (
    <MotionFade>
      <a className={styles.card} href={href} target="_blank" rel="noopener noreferrer">
        <div className={styles.thumb} /> {/* replace with image later */}
        <h3>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        {tech.length>0 && <ul className={styles.tags}>{tech.map((t,i)=><li key={i}>{t}</li>)}</ul>}
      </a>
    </MotionFade>
  );
}
