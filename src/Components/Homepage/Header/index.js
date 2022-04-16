/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.headerPosition}>
      <nav className={styles.headerContent}>
        <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/bennu-header.png`} alt="bennu logo" />
        <ul className={styles.navLinks}>
          <li>
            HOME
          </li>
          <li>
            QUIENES SOMOS
          </li>
          <li>
            ROADMAP
          </li>
          <li>
            FAQs
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
