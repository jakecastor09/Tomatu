import styles from './cart.module.css';
import CartItem from './cart-item.component';
import Button from '../button/button';
const Cart = () => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </ul>
  );
  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Cart(6)</h1>
      <header className={styles['cart-item-header']}>
        <h3>Order List</h3>
        <p>Wed, Aug21, 2018 | 05:45:59</p>
      </header>
      {cartItems}
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
    </div>
  );
};
export default Cart;
