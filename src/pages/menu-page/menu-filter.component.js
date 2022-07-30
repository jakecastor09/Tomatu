import styles from './menu-filter.module.css';
import Card from '../../components/card/card.component';
import FilterItem from './filter-item.component';
const MenuFilter = () => {
  return (
    <div className={styles['menu-filter']}>
      <header className={styles['menu-filter__header']}>
        <h3 className={styles['menu-filter__header--title']}>Filter</h3>
        <h3 className={styles['menu-filter__header--reset']}>Reset All</h3>
      </header>
      <div className={styles['menu-filter__items']}>
        <div className={styles['menu-filter__item']}>
          <FilterItem itemName='All Promo' />
          <FilterItem itemName='Special Menu' quantity={230} />
          <FilterItem itemName='Buy 01 Get 01' quantity={54} />
          <FilterItem itemName='Bank Promotions' quantity={6} />
          <FilterItem itemName='Hoppy Hour' quantity={124} />
          <FilterItem itemName='Event' quantity={64} />
        </div>
        <div className={styles['menu-filter__item']}>
          <FilterItem itemName='Main Food' />
          <FilterItem itemName='Drinks' />
          <FilterItem itemName='Appetizer' />
          <FilterItem itemName='Dessert' />
          <FilterItem itemName='Side Menu' />
        </div>
        <div className={styles['menu-filter__item']}>
          <FilterItem itemName='Chinese' />
          <FilterItem itemName='Italian' />
          <FilterItem itemName='Mexican' />
          <FilterItem itemName='Indian' />
          <FilterItem itemName='Western' />
        </div>
      </div>
    </div>
  );
};
export default MenuFilter;
