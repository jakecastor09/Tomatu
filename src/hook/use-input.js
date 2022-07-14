import { useReducer } from 'react';

const intialState = {
  value: '',
  isTouched: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return { ...state, value: action.payload };
    case 'BLUR':
      return { ...state, isTouched: action.payload };
    case 'RESET':
      return { ...state, intialState };
    default: {
      return state;
    }
  }
};

const useInput = (validateValue, errorMessage) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const valueIsValid = validateValue(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = event => {
    dispatch({ type: 'INPUT', payload: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR', payload: true });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const valueInputClasses = hasError ? 'invalid' : '';

  const errorMessageComponent = <p className='error-text'>{errorMessage}</p>;

  return {
    value: state.value,
    isValid: valueIsValid,
    valueInputClasses,
    hasError,
    reset,
    valueChangeHandler,
    inputBlurHandler,
    errorMessageComponent,
  };
};

export default useInput;
