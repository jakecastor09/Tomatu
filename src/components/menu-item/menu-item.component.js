import Card from '../card/card.component';
import styles from './menu-item.module.css';
import Button from '../button/button';
import Rating from '../rating/rating.component';
const MenuItem = () => {
  return (
    <Card>
      <div className={styles['menu-item']}>
        <span className={styles.price}>$25.00</span>
        <div className={styles.content}>
          <div className={styles['image-container']}>
            <img src={require('../../images/burger.png')} alt='' />
          </div>
          <h1 className={styles['item-name']}>Chicken Sandwitch</h1>
          <Rating rates={4} />
          <p className={styles['item-details']}>
            A small river named Duden flows by their place and supplies
          </p>
        </div>
        <Button small={true} className='btn-outline'>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
export default MenuItem;
