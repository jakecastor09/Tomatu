import styles from './item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Item = ({ icon, name }) => {
  const routerLinkName = '/' + name.toLowerCase().replace(' ', '-');
  console.log(routerLinkName);
  return (
    <li className={`${styles.item} }`}>
      <Link to={routerLinkName}>
        <FontAwesomeIcon className={styles['item__icon']} icon={icon} />
        <span className={styles['item__name']}>{name}</span>
      </Link>
    </li>
  );
};

export default Item;
