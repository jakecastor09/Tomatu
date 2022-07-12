import FeatureItem from '../feature-item/feature-item.component';
import styles from './features.module.css';

import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faPlateWheat } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';

const Features = ({ name }) => {
  return (
    <div className={styles.features}>
      <div className={styles.shadow}></div>
      <img
        className={styles['features__img']}
        src={require(`../../../images/entry/${name}@2x.jpg`)}
        alt=''
      />
      <div className={styles['features__content']}>
        <ul className={styles.list}>
          <li>
            <FeatureItem
              icon={faTruckFast}
              title='Fast Delivery'
              message='A wonderful serenity has taken possession of my entire soul, like these sweet mornings my whole heart.'
            />
          </li>
          <li>
            <FeatureItem
              icon={faPlateWheat}
              title='Fresh Dishes'
              message='A wonderful serenity has taken possession of my entire soul, like these sweet mornings my whole heart.'
            />
          </li>
          <li>
            <FeatureItem
              icon={faUtensils}
              title='Various Menu'
              message='A wonderful serenity has taken possession of my entire soul, like these sweet mornings my whole heart.'
            />
          </li>
          <li>
            <FeatureItem
              icon={faGift}
              title='Well Services'
              message='A wonderful serenity has taken possession of my entire soul, like these sweet mornings my whole heart.'
            />
          </li>
        </ul>
        <div className={styles['features__footer']}>
          <h1>Order Delivery & Take-Out </h1>
          <p>
            Find Restaurants, Specials, and Coupons for free{' '}
            <span style={{ color: 'var(--primary-color)' }}>Tomatus</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
