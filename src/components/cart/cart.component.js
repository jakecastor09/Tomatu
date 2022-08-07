import styles from './cart.module.css';
import CartItem from './cart-item.component';
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
  return cartItems;
};
export default Cart;
