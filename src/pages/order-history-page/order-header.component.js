import styles from './order-header.module.css';
const OrderHeader = () => {
  return (
    <header className={styles['order-header']}>
      <h3 className={styles['order-header__page']}>01</h3>
      <h3>Order ID</h3>
      <h3>Product</h3>
      <h3>Delivery Date & Time</h3>
      <h3>Price</h3>
      <h3>Status</h3>
    </header>
  );
};
export default OrderHeader;
