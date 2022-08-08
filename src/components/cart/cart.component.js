import styles from './cart.module.css';
import CartItem from './cart-item.component';
import CartFooter from './cart-footer.component';
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
      <CartFooter />
    </div>
  );
};
export default Cart;
