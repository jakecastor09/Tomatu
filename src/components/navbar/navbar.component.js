import styles from './navbar.module.css';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../dropdown/dropdown.component';
import DropdownContext from '../../store/dropdown-context';
import Cart from '../cart/cart.component';
const Navbar = () => {
  const dropdownCtx = useContext(DropdownContext);

  const [isDropdownClicked, setIsDropdownClicked] = useState(false);

  const dropdownClickHandler = () => {
    setIsDropdownClicked(!isDropdownClicked);
  };

  const dropdownComponent = isDropdownClicked && (
    <div className={styles.dropdown}>
      <Dropdown />
    </div>
  );

  const showCart = dropdownCtx.selectedItem === 'order list' && (
    <div className={styles.cart}>
      <Cart />
    </div>
  );

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
            onClick={dropdownClickHandler}
            className={styles['dropdown-btn']}
            icon={faCaretSquareDown}
          />
        </div>
        {dropdownComponent}
        {showCart}
      </div>
    </nav>
  );
};
export default Navbar;
