import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCssmodules } from "react-icons/si";
import MotionFade from "../primitives/MotionFade";
import styles from "./techicons.module.css";

const items = [
  { icon:<FaReact/>, label:"React" },
  { icon:<SiJavascript/>, label:"JavaScript" },
  { icon:<FaNodeJs/>, label:"Node.js" },
  { icon:<SiMongodb/>, label:"MongoDB" },
  { icon:<SiCssmodules/>, label:"CSS Modules" },
  { icon:<FaGithub/>, label:"GitHub" },
];

export default function Techicons(){
  return (
    <MotionFade>
      <h3 className={styles.h}>Tech I use</h3>
      <ul className={styles.grid}>
        {items.map((it,i)=>(
          <li key={i} className={styles.item}>
            <span className={styles.icn}>{it.icon}</span>
            <span className={styles.lbl}>{it.label}</span>
          </li>
        ))}
      </ul>
    </MotionFade>
  );
}
