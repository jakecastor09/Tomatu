import styles from './menu-item.module.css';
import MenuItemCol1 from './menu-item-col-1.component';
import MenuItemCol2 from './menu-item-col-2.component';
import MenuItemCol3 from './menu-item-col-3.component';

const MenuItem = ({ layout }) => {
  // display the layout that the user picked
  const displayLayout = () => {
    switch (layout) {
      case 1:
        return <MenuItemCol1 />;
      case 2:
        return <MenuItemCol2 />;
      case 3:
        return <MenuItemCol3 />;
      default:
        return <MenuItemCol2 />;
    }
  };
  return displayLayout(layout);
};
export default MenuItem;
