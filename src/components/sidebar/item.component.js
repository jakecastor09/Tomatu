import styles from './item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ icon, name }) => {
  return (
    <li className={`${styles.item} }`}>
      <FontAwesomeIcon className={styles['item__icon']} icon={icon} />
      <span className={styles['item__name']}>{name}</span>
    </li>
  );
};

export default Item;
