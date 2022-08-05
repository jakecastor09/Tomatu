import styles from './menu-item-col-2.module.css';
import Card from '../card/card.component';
import Button from '../button/button';

const MenuItemCol2 = ({ name, details, price, image }) => {
  return (
    <Card>
      <div className={styles['menu-item-col-2']}>
        <span className={styles.price}>${price}</span>
        <div className={styles['product']}>
          <div className={styles['product-img-container']}>
            <img src={require('../../images/burger.png')} alt='' />
          </div>
          <div className={styles['product-details']}>
            <h1>{name}</h1>
            <p>{details}</p>
            <Button small={true} className='btn-outline'>
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default MenuItemCol2;
