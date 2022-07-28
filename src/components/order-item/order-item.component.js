import styles from './order-item.module.css';
import useFormatDate from '../../hook/use-format-date.component';
const OrderItem = ({ image, productName, productId, date, price }) => {
  const d = new Date();
  const { formatedDate } = useFormatDate(d);
  return (
    <div className={styles['order-item']}>
      <div className={styles['order-item__product']}>
        <img src={require('../../images/burger.png')} alt='' />
        <h3>{productName}</h3>
      </div>
      <div className={styles['order-item__id']}>{productId}</div>
      <div className={styles['order-item__date']}>{formatedDate}</div>
      <div className={styles['order-item__price']}>{price}</div>
    </div>
  );
};
export default OrderItem;
