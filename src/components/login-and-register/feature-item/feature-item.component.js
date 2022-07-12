import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './feature-item.module.css';

const FeatureItem = ({ icon, title, message }) => {
  return (
    <div className={styles['feature-item']}>
      <div className={styles['feature-item__icons']}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className={styles['feature-item__heading']}>{title}</h3>
      <p>{message}</p>
    </div>
  );
};
export default FeatureItem;
