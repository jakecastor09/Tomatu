import styles from './dropdown-item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DropdownItem = props => {
  return (
    <div className={styles['dropdown-item']}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <h3>{props.name}</h3>
    </div>
  );
};
export default DropdownItem;
