import styles from './menu-item-col-2.module.css';
import Card from '../card/card.component';
import Button from '../button/button';

const MenuItemCol2 = () => {
  return (
    <Card>
      <div className={styles['menu-item-col-2']}>
        <span className={styles.price}>$25.00</span>
        <div className={styles['product']}>
          <div className={styles['product-img-container']}>
            <img src={require('../../images/burger.png')} alt='' />
          </div>
          <div className={styles['product-details']}>
            <h1>Chicken Sandwich</h1>
            <p>A small river name Duden flows</p>
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
