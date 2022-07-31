import React from 'react';

const MenuFilterContext = React.createContext({
  allSelectedItems: [],
  reset: () => {},
  selectItem: () => {},
  removeSelectedItem: () => {},
  selectAllItem: () => {},
});

export default MenuFilterContext;
