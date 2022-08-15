import { useReducer } from 'react';
import DropdownContext from './dropdown-context';

const defaultState = {
  selectedItem: '',
};

const reducer = (state, action) => {
  if (!action.type) {
    return defaultState;
  }

  if (action.type) {
    return {
      ...state,
      selectedItem: action.type.toLowerCase(),
    };
  }
};

const DropdownProvider = props => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const onClickItemHandler = itemName => {
    dispatch({ type: itemName });
  };

  const dropdownContext = {
    selectedItem: state.selectedItem,
    onClickItem: onClickItemHandler,
  };

  return (
    <DropdownContext.Provider value={dropdownContext}>
      {props.children}
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;
