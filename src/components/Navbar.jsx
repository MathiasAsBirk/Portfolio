import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>Mathias Birkeland</a>
        <nav className={styles.nav}>
          <a href="#work" className={styles.link}>Work</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
