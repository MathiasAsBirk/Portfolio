import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.logo}>Mathias<span>Dev</span></div>
          <ul className={styles.links}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
      <hr className="hr" />
    </nav>
  );
}
