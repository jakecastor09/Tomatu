import styles from './favourite-item.module.css';
import HighlightedBox from '../../components/highlighted-box/highlighted-box.component';
const FavouriteItem = ({ image, productName, price }) => {
  return (
    <div className={styles['favourite-item']}>
      <img
        className={styles['favourite-item__img']}
        src={require('../../images/burger.png')}
        alt=''
      />
      <h3 className={styles['favourite-item__product-name']}>
        Chicken Sandwich
      </h3>
      <div className={styles['favourite-item__price']}>
        <HighlightedBox color='danger-background'>$25</HighlightedBox>
      </div>
    </div>
  );
};

export default FavouriteItem;
