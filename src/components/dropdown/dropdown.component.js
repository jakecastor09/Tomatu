import styles from './dropdown.module.css';
import DropdownItem from './dropdown-item.component';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <DropdownItem name='Personal Info' icon={faUser} />
      <DropdownItem name='Order List' icon={faClipboard} />
      <DropdownItem name='Favourites' icon={faHeart} />
    </div>
  );
};
export default Dropdown;
