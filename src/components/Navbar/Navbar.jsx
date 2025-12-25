import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.logo}>MathiasDev</span>

        <nav className={styles.nav}>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
