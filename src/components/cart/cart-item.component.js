import styles from './cart-item.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const CartItem = props => {
  return (
    <li className={styles['cart-item']}>
      <div className={styles['item-details']}>
        <h2>Grill Chicken Buffalitos</h2>
        <span className={styles.price}>$32.75</span>
      </div>
      <div className={styles.qty}>02</div>
      <div className={styles.amount}>$65.50</div>
      <div className={styles.button}>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </li>
  );
};
export default CartItem;
