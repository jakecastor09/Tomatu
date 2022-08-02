import { useReducer } from 'react';
import MenuFilterContext from './menu-filter-context';
import {
  SELECT_ALL_ITEM,
  SELECT_ITEM,
  REMOVE_SELECTED_ITEM,
  RESET,
} from '../actions/menu-filter-types';

const defaultState = {
  allItemsSelected: [],
  startPrice: 0,
  maxPrice: 1000,
};

const allMenu = [
  'special menu',
  'buy 1 get 1',
  'bank promotions',
  'hoppy hour',
  'event',
  'main food',
  'drinks',
  'appetizer',
  'dessert',
  'slide menu',
  'chinese',
  'italian',
  'mexican',
  'indian',
  'western',
];

const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_ALL_ITEM: {
      return {
        ...state,
        allItemsSelected: allMenu,
      };
    }
    case SELECT_ITEM: {
      const selectedItem = action.payload.item;
      const newAllItemsSelected = [...state.allItemsSelected, selectedItem];
      return { allItemsSelected: newAllItemsSelected };
    }
    case REMOVE_SELECTED_ITEM: {
      const selectedItemToRemove = action.payload.item;
      const newAllItemsSelected = state.allItemsSelected.filter(
        item => item !== selectedItemToRemove
      );
      return { allItemsSelected: newAllItemsSelected };
    }
    case RESET: {
      return { ...state, allSelectedItems: [] };
    }

    default: {
      return state;
    }
  }
};

const MenuFilterProvider = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const resetHandler = () => {
    dispatch({ type: RESET });
  };
  const selectItemHandler = item => {
    dispatch({ type: SELECT_ITEM, payload: item });
  };
  const removeSelectedItemHandler = item => {
    dispatch({ type: REMOVE_SELECTED_ITEM, payload: item });
  };
  const selectAllItemHandler = () => {
    dispatch({ type: SELECT_ALL_ITEM });
  };

  const menuFilterContext = {
    allItemsSelected: state.allItemsSelected,
    startPrice: state.startPrice,
    maxPrice: state.maxPrice,
    selectAllItem: selectAllItemHandler,
    selectItem: selectItemHandler,
    removeSelectedItem: removeSelectedItemHandler,
    reset: resetHandler,
  };

  return (
    <MenuFilterContext.Provider
      value={menuFilterContext}
    ></MenuFilterContext.Provider>
  );
};

export default MenuFilterProvider;
