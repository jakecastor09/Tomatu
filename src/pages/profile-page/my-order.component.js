import styles from './my-order.module.css';
import Card from '../../components/card/card.component';
import OrderItem from '../../components/order-item/order-item.component';
const MyOrder = () => {
  return (
    <Card>
      <div className={styles['my-order']}>
        <div className={styles.heading}>
          <h1>My Order</h1>
        </div>
        <OrderItem
          productName={'Plain Pizza'}
          productId={'#746815'}
          price={'$28.58'}
        />
        <OrderItem
          productName={'Chicken Burger'}
          productId={'#746815'}
          price={'$58.18'}
        />
        <OrderItem
          productName={'Beef Burger'}
          productId={'#746815'}
          price={'$13.22'}
        />
      </div>
    </Card>
  );
};
export default MyOrder;
