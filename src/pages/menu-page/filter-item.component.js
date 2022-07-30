import styles from './filter-item.module.css';
import CheckBox from '../../components/checkbox/checkbox.component';
const FilterItem = ({ itemName, quantity }) => {
  return (
    <div className={styles['filter-item']}>
      <CheckBox color='primary' name={itemName} textColor='dark-grey' />
      <span className={styles['filter-item__quantity']}>{quantity}</span>
    </div>
  );
};
export default FilterItem;
