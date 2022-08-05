import styles from './menu-items.module.css';
import { useState } from 'react';
import MenuItemCol1 from './menu-item-col-1.component';
import MenuItemCol2 from './menu-item-col-2.component';
import MenuItemCol3 from './menu-item-col-3.component';

const MenuItems = props => {
  // display the layout that the user picked

  const allItems = props.data.map((item, index) => {
    switch (props.layout) {
      case 1:
        return (
          <MenuItemCol3
            key={index}
            name={item.name}
            details={item.details}
            price={item.price}
            image={item.image}
          />
        );
      case 2:
        return (
          <MenuItemCol2
            key={index}
            name={item.name}
            details={item.details}
            price={item.price}
            image={item.image}
          />
        );
      case 3:
        return (
          <MenuItemCol1
            key={index}
            name={item.name}
            details={item.details}
            price={item.price}
            image={item.image}
          />
        );
      default:
        return (
          <MenuItemCol1
            key={index}
            name={item.name}
            details={item.details}
            price={item.price}
            image={item.image}
          />
        );
    }
  });

  return (
    <div
      className={`${styles['menu-items']} ${
        props.layout && styles['col-' + props.layout]
      }`}
    >
      {allItems}
    </div>
  );
};
export default MenuItems;
