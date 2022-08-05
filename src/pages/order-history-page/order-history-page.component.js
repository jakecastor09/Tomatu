import styles from './order-history-page.module.css';
import PageContainer from '../../components/page-container/page-container.component';
import HeadingBar from '../../components/heading-bar/heading-bar.component';
import OrderItem from './order-item.component';
import OrderHeader from './order-header.component';
const OrderHistoryPage = () => {
  return (
    <PageContainer>
      <div className={styles['order-history-page']}>
        <HeadingBar pageName='Order History' />
        <div className={styles['order-history-page__content']}>
          <h1 className={styles['order-history-page__title']}>Order History</h1>
          <OrderHeader />
          <div className={styles['order-history-page__item']}>
            <OrderItem status='paid' />
            <OrderItem status='pending' />
            <OrderItem status='paid' />
            <OrderItem status='cancel' />
            <OrderItem status='pending' />
            <OrderItem status='paid' />
            <OrderItem status='cancel' />
            <OrderItem status='paid' />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
export default OrderHistoryPage;
