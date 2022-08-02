import { useReducer } from 'react';
import MenuFilterContext from './menu-filter-context';
import {
  SELECT_ALL_ITEM,
  SELECT_ITEM,
  REMOVE_SELECTED_ITEM,
  RESET,
} from '../actions/menu-filter-types';

const defaultState = {
  menuType1: [],
  menuType2: [],
  menuType3: [],
  startPrice: 0,
  maxPrice: 1000,
};

const allMenuType1 = [
  'all promo',
  'special menu',
  'buy 1 get 1',
  'bank promotions',
  'hoppy hour',
  'event',
];
const allMenuType2 = [
  'main food',
  'drinks',
  'appetizer',
  'dessert',
  'slide menu',
];
const allMenuType3 = ['chinese', 'italian', 'mexican', 'indian', 'western'];

const reducer = (state, action) => {
  switch (action.type) {
    case SELECT_ALL_ITEM: {
      return {
        ...state,
        menuType1: allMenuType1,
        menuType2: allMenuType2,
        menuType3: allMenuType3,
      };
    }
    case SELECT_ITEM: {
      const menuType = state[action.payload.typeMenu];
      state[menuType] = [...menuType, action.payload.item];
      return state;
    }
    case REMOVE_SELECTED_ITEM: {
      const menuType = state[action.payload.typeMenu];
      state[menuType] = state[menuType].filter(
        item => item.toLowerCase() !== action.payload.item
      );
      return state;
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
  const selectItemHandler = (typeMenu, item) => {
    dispatch({ type: SELECT_ITEM, payload: { typeMenu, item } });
  };
  const removeSelectedItemHandler = (typeMenu, item) => {
    dispatch({ type: REMOVE_SELECTED_ITEM, payload: { typeMenu, item } });
  };
  const selectAllItemHandler = () => {
    dispatch({ type: SELECT_ALL_ITEM });
  };

  const menuFilterContext = {
    menuType1: state.menuType1,
    menuType2: state.menuType2,
    menuType3: state.menuType3,
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
