import styles from './my-order.module.css';
import OrderItem from '../../components/order-item/order-item.component';
import InfoContainer from './info-container.component';
const MyOrder = () => {
  return (
    <InfoContainer title='My Order'>
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
    </InfoContainer>
  );
};
export default MyOrder;
