import styles from './social-network.module.css';
import * as Icon from 'react-feather';

const SocialNetwork = () => {
  return (
    <ul className={styles['social-media__list']}>
      <li className={styles['icon']}>
        <Icon.Facebook />
      </li>
      <li className={styles['icon']}>
        <Icon.Twitter />
      </li>
      <li className={styles['icon']}>
        <Icon.Linkedin />
      </li>
      <li className={styles['icon']}>
        <Icon.Instagram />
      </li>
    </ul>
  );
};
export default SocialNetwork;
