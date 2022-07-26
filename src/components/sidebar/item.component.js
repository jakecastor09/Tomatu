import styles from './item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useNameConvertToRouterLink from '../../hook/use-name-convert-to-router-link';
const Item = ({ icon, name }) => {
  const routerLinkName = useNameConvertToRouterLink(name);
  return (
    <Link to={routerLinkName}>
      <li className={`${styles.item} }`}>
        <FontAwesomeIcon className={styles['item__icon']} icon={icon} />
        <span className={styles['item__name']}>{name}</span>
      </li>
    </Link>
  );
};

export default Item;
