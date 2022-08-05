import styles from './menu-item-color-3.module.css';
import Card from '../card/card.component';
import Button from '../button/button';
const MenuItemCol3 = ({ name, details, price, image }) => {
  return (
    <Card>
      <div className={styles['menu-item-col-3']}>
        <div className={styles.product}>
          <img src={require('../../images/burger.png')} alt='' />
          <div className={styles['product-details']}>
            <h1>{name}</h1>
            <p>{details}</p>
          </div>
          <div className={styles.button}>
            <Button small={true} className='btn-outline'>
              Add to Cart
            </Button>
          </div>
        </div>
        <span className={styles.price}>${price}</span>
      </div>
    </Card>
  );
};
export default MenuItemCol3;
