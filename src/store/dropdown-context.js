import React from 'react';

const DropdownContext = React.createContext({
  selectedItem: '',
  onClickItem: () => {},
});

export default DropdownContext;
