import styles from './order-item.module.css';
import useFormatDate from '../../hook/use-format-date.component';
import HighlightedBox from '../../components/highlighted-box/highlighted-box.component';
const OrderItem = ({
  orderId,
  product,
  deliveryDateAndTime,
  price,
  status,
}) => {
  const d = new Date();
  const { formatedDate } = useFormatDate(d);

  const statusColor = status => {
    switch (status) {
      case 'paid':
        return 'success';
      case 'cancel':
        return 'danger';
      case 'pending':
        return 'tertiary';
      default:
        return '';
    }
  };
  return (
    <div className={styles['order-item']}>
      <div className={styles['order-item__number']}>01</div>
      <div className={styles['order-item__order-id']}>#746815</div>
      <div className={styles['order-item__product']}>Plain Pizza</div>
      <div className={styles['order-item__delivery-date-and-time']}>
        {formatedDate}
      </div>
      <div className={styles['order-item__price']}>$28.58</div>
      <div className={styles['order-item__status']}>
        <HighlightedBox color={statusColor('paid')}>Paid</HighlightedBox>
      </div>
    </div>
  );
};
export default OrderItem;
