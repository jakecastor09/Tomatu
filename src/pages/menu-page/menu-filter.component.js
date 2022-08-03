import { useContext, useEffect, useState } from 'react';
import styles from './menu-filter.module.css';
import FilterItem from './filter-item.component';
import PriceRange from './price-range.component';
import MenuFilterContext from '../../store/menu-filter-context';

const MenuFilter = () => {
  //TODO: I need to activate reset button.
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState({
    specialMenu: false,
    buy01get01: false,
    bankPromotions: false,
    hoppyHour: false,
    event: false,
    mainFood: false,
    drinks: false,
    appetizer: false,
    dessert: false,
    sideMenu: false,
    chinese: false,
    italian: false,
    mexican: false,
    indian: false,
    western: false,
  });
  const menuFilterCtx = useContext(MenuFilterContext);
  const resetClickedHandler = () => {
    menuFilterCtx.reset();
    setCheckedAll(false);

    //unchecked all checkbox
    setChecked(prevState => {
      const newState = { ...prevState };
      for (let name in newState) {
        newState[name] = false;
      }
      return newState;
    });
  };

  //Toggles check state based on inputname

  const toggleCheck = inputName => {
    setChecked(prevState => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  //Checks or Unchecks all from select all click
  const selectAll = value => {
    setCheckedAll(value);
    setChecked(prevState => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };

  // IF YOU CHECK BOTH INDIVIDUALLY. IT WILL ACTIVATE THE checkedAll STATE
  // IF YOU UNCHECK ANY INDIVIDUALLY. IT WILL DE-ACTIVATE THE checkAll STATE

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  return (
    <div className={styles['menu-filter']}>
      <header className={styles['menu-filter__header']}>
        <h3 className={styles['menu-filter__header--title']}>Filter</h3>
        <h3
          className={styles['menu-filter__header--reset']}
          onClick={resetClickedHandler}
        >
          Reset All
        </h3>
      </header>
      <div className={styles['menu-filter__items']}>
        <div className={styles['menu-filter__item']}>
          <FilterItem
            itemName='All Promo'
            onChange={event => selectAll(event.target.checked)}
            checked={checkedAll}
          />
          <FilterItem
            itemName='Special Menu'
            quantity={230}
            checked={checked['specialMenu']}
            onChange={() => toggleCheck('specialMenu')}
          />
          <FilterItem
            itemName='Buy 01 Get 01'
            quantity={54}
            checked={checked['buy01get01']}
            onChange={() => toggleCheck('buy01get01')}
          />
          <FilterItem
            itemName='Bank Promotions'
            quantity={6}
            checked={checked['bankPromotions']}
            onChange={() => toggleCheck('bankPromotions')}
          />
          <FilterItem
            itemName='Hoppy Hour'
            quantity={124}
            checked={checked['hoppyHour']}
            onChange={() => toggleCheck('hoppyHour')}
          />
          <FilterItem
            itemName='Event'
            quantity={64}
            checked={checked['event']}
            onChange={() => toggleCheck('event')}
          />
        </div>
        <div className={styles['menu-filter__item']}>
          <FilterItem
            itemName='Main Food'
            checked={checked['mainFood']}
            onChange={() => toggleCheck('mainFood')}
          />
          <FilterItem
            itemName='Drinks'
            checked={checked['drinks']}
            onChange={() => toggleCheck('drinks')}
          />
          <FilterItem
            itemName='Appetizer'
            checked={checked['appetizer']}
            onChange={() => toggleCheck('appetizer')}
          />
          <FilterItem
            itemName='Dessert'
            checked={checked['dessert']}
            onChange={() => toggleCheck('dessert')}
          />
          <FilterItem
            itemName='Side Menu'
            checked={checked['sideMenu']}
            onChange={() => toggleCheck('sideMenu')}
          />
        </div>
        <div className={styles['menu-filter__item']}>
          <FilterItem
            itemName='Chinese'
            checked={checked['chinese']}
            onChange={() => toggleCheck('chinese')}
          />
          <FilterItem
            itemName='Italian'
            checked={checked['italian']}
            onChange={() => toggleCheck('italian')}
          />
          <FilterItem
            itemName='Mexican'
            checked={checked['mexican']}
            onChange={() => toggleCheck('mexican')}
          />
          <FilterItem
            itemName='Indian'
            checked={checked['indian']}
            onChange={() => toggleCheck('indian')}
          />
          <FilterItem
            itemName='Western'
            checked={checked['western']}
            onChange={() => toggleCheck('western')}
          />
        </div>
        <div className={styles['menu-filter__item']}>
          <PriceRange />
        </div>
      </div>
    </div>
  );
};
export default MenuFilter;
