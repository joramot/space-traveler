import { NavLink } from 'react-router-dom';
import logoSpace from '../assets/planet.png';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (

    <header>
      <div>
        <img src={logoSpace} alt="logoSpace" />
        <h1>Space Traveler Hub</h1>
      </div>

      <nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <NavLink
              to="/"
              className={({ isActive }) => {
                const active = isActive ? styles.active : styles.navLink;
                return active;
              }}
            >
              Rockets
            </NavLink>
          </li>

          <li className={styles.li}>
            <NavLink
              to="missions"
              className={({ isActive }) => {
                const active = isActive ? styles.active : styles.navLink;
                return active;
              }}
            >
              Missions
            </NavLink>
          </li>
          <li>|</li>
          <li className={styles.li}>
            <NavLink
              to="myProfile"
              className={({ isActive }) => {
                const active = isActive ? styles.active : styles.navLink;
                return active;
              }}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>

    </header>

  );
}

export default Navbar;
