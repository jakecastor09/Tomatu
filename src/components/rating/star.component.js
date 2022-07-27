import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from './star.module.css';

const Star = ({ active }) => {
  return (
    <FontAwesomeIcon
      className={`${styles['star-icon']} ${active && styles['filled-color']}`}
      icon={faStar}
    />
  );
};
export default Star;
