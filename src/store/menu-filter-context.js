import React from 'react';

const MenuFilterContext = React.createContext({
  allItemsSelected: [],
  startPrice: 0,
  maxPrice: 1000,
  reset: () => {},
  selectItem: () => {},
  removeSelectedItem: () => {},
  selectAllItem: () => {},
});

export default MenuFilterContext;
