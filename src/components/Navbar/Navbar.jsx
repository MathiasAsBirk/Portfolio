import { NavLink, Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          MathiasDev
        </Link>

        <nav className={styles.nav}>
          <NavLink to="/" end className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/portfolio" className={getLinkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={getLinkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;