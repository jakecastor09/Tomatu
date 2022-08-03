import { useContext } from 'react';
import styles from './filter-item.module.css';
import CheckBox from '../../components/checkbox/checkbox.component';
import MenuFilterContext from '../../store/menu-filter-context';
const FilterItem = ({ itemName, quantity, checked, onChange }) => {
  const menuFilterCtx = useContext(MenuFilterContext);

  const checkboxHandler = event => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (itemName.toLowerCase() === 'all promo' && isChecked) {
      menuFilterCtx.selectAllItem();
      return;
    }
    if (itemName.toLowerCase() === 'all promo' && !isChecked) {
      menuFilterCtx.reset();
      return;
    }

    if (isChecked) {
      menuFilterCtx.selectItem(value);
    }

    if (!isChecked) {
      menuFilterCtx.removeSelectedItem(value);
    }
  };
  return (
    <div className={styles['filter-item']} onChange={onChange}>
      <CheckBox
        color='primary'
        name={itemName}
        value={itemName}
        textColor='dark-grey'
        onChange={checkboxHandler}
        checked={checked}
      />
      <span className={styles['filter-item__quantity']}>{quantity}</span>
    </div>
  );
};
export default FilterItem;
