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

  const upperCaseTheFirstLetter = text => {
    const transformedText = text.split('')[0].toUpperCase() + text.slice(1);
    return transformedText;
  };
  // add style for each status
  const statusColor = (property, status) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return property === 'background'
          ? 'success-background'
          : 'success-text-color';
      case 'cancel':
        return property === 'background'
          ? 'danger-background'
          : 'danger-text-color';
      case 'pending':
        return property === 'background'
          ? 'tertiary-background'
          : 'tertiary-text-color';
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
      <div
        className={`${styles['order-item__price']} ${statusColor(
          'color',
          status
        )}`}
      >
        $28.58
      </div>
      <div className={styles['order-item__status']}>
        <HighlightedBox color={statusColor('background', status)}>
          {upperCaseTheFirstLetter(status)}
        </HighlightedBox>
      </div>
    </div>
  );
};
export default OrderItem;
