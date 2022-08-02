import React from 'react';

const MenuFilterContext = React.createContext({
  menuType1: [],
  menuType2: [],
  menuType3: [],
  startPrice: 0,
  maxPrice: 1000,
  reset: () => {},
  selectItem: () => {},
  removeSelectedItem: () => {},
  selectAllItem: () => {},
});

export default MenuFilterContext;
