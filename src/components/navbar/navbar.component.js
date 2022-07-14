import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['left-side']}>
        <div className={styles['logo-container']}>
          <div className={styles.logo}>
            <img src={require('../../images/logo/Ellipse 1.webp')} alt='Logo' />
            <span>omatus</span>
          </div>
          <div className={styles['logo-icon']}>
            <FontAwesomeIcon className={styles.bars} icon={faBars} />
          </div>
        </div>
        <div className={styles['search-container']}>
          <input type='text' placeholder='Search...' />
          <FontAwesomeIcon
            className={styles['magnifying-glass-icon']}
            icon={faMagnifyingGlass}
          />
        </div>
      </div>
      <div className={styles['right-side']}>
        <FontAwesomeIcon className={styles.bell} icon={faBell} />
        <div className={styles['user-profile']}>
          <div className={styles.avatar}>
            <img src={require('../../images/women.webp')} alt='' />
          </div>
          <h3 className={styles.name}>Jake E. Castor</h3>
          <FontAwesomeIcon
            className={styles.dropdown}
            icon={faCaretSquareDown}
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
