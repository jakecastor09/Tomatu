import Card from '../card/card.component';
import styles from './menu-item.module.css';
const MenuItem = () => {
  return (
    <Card>
      <div className={styles['menu-item']}>
        <span className={styles.price}>$25.00</span>
      </div>
    </Card>
  );
};
export default MenuItem;
