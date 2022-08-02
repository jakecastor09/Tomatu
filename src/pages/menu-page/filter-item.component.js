import { useContext } from 'react';

import styles from './filter-item.module.css';
import CheckBox from '../../components/checkbox/checkbox.component';
import MenuFilterContext from '../../store/menu-filter-context';
const FilterItem = ({ itemName, quantity }) => {
  const menuFilterCtx = useContext(MenuFilterContext);

  const checkboxHandler = event => {
    if (event.target.checked) {
      menuFilterCtx.selectItem(itemName);
    }

    if (!event.target.checked) {
      menuFilterCtx.selectAllItem(itemName);
    }
  };

  return (
    <div className={styles['filter-item']}>
      <CheckBox
        color='primary'
        name={itemName}
        value={itemName}
        textColor='dark-grey'
        onChange={checkboxHandler}
      />
      <span className={styles['filter-item__quantity']}>{quantity}</span>
    </div>
  );
};
export default FilterItem;
