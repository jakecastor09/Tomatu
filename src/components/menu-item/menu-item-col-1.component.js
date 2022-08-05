import styles from './menu-item-col-1.module.css';
import Card from '../card/card.component';
import Rating from '../rating/rating.component';
import Button from '../button/button';
//TODO: Fix image not working
const MenuItemCol1 = ({ name, details, price, image }) => {
  return (
    <Card>
      <div className={styles['menu-item-col-1']}>
        <span className={styles.price}>${price}</span>
        <div className={styles.content}>
          <div className={styles['image-container']}>
            <img src={require('../../images/burger.png')} alt={name} />
          </div>
          <h1 className={styles['item-name']}>{name}</h1>
          <Rating rates={4} />
          <p className={styles['item-details']}>{details}</p>
        </div>
        <Button small={true} className='btn-outline'>
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
export default MenuItemCol1;
