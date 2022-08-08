import styles from './cart-footer.module.css';
import Button from '../button/button';

const CartFooter = () => {
  return (
    <footer className={styles['cart-footer']}>
      <div className={styles['payment-details']}>
        <div className={styles['sub-total']}>
          <span className={styles['sub-total__name']}>SubTotal:</span>
          <span className={styles['sub-total__value']}>$411.10</span>
        </div>
        <div className={styles.tax}>
          <span className={styles['tax__name']}>10% Tax:</span>
          <span className={styles['tax__value']}>$411.10</span>
        </div>
      </div>
      <div className={styles['total-amount']}>
        <span className={styles['total-amount__name']}>Total:</span>
        <span className={styles['total-amount__value']}>$452.11</span>
      </div>
      <div className={styles.button}>
        <Button small={true}>Pay</Button>
      </div>
    </footer>
  );
};
export default CartFooter;
