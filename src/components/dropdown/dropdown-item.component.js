import styles from './dropdown-item.module.css';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownContext from '../../store/dropdown-context';

const DropdownItem = ({ icon, name }) => {
  const dropdownCtx = useContext(DropdownContext);
  const onClickHandler = () => {
    dropdownCtx.onClickItem(name);
  };

  return (
    <div className={styles['dropdown-item']} onClick={onClickHandler}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3> {name}</h3>
    </div>
  );
};
export default DropdownItem;
