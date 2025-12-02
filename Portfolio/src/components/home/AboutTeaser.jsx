import MotionFade from "../primitives/MotionFade";
import styles from "./aboutteaser.module.css";
import pfp from "../../assets/profile.png"

export default function AboutTeaser(){
  return (
    <div className={styles.grid}>
      <MotionFade>
        <img src={pfp} alt="Mathias" className={styles.photo}/>
      </MotionFade>
      <MotionFade delay={.1}>
        <div>
          <h2>About</h2>
          <p className={styles.p}>
            I build product-focused frontends with React. I iterate quickly and favor clear,
            maintainable code over clever tricks. Strong with React, Node, and MongoDB.
          </p>
          <p className={styles.p}>
            I keep it simple: ship, measure, refine. Clean architecture, accessible UI,
            and performance where it counts.
          </p>
        </div>
      </MotionFade>
    </div>
  );
}
