import { useState } from 'react';
import styles from './price-range.module.css';
const PriceRange = () => {
  const [value, setValue] = useState(0);

  const inputRangeChangeHandler = event => {
    setValue(event.target.value);
  };

  const fromSliderChangeHandler = event => {
    setValue(event.target.value);
  };

  return (
    <div className={styles['price-range']}>
      <h3 className={styles['price-range__title']}>Price Range</h3>
      <div className={styles['price-range__input']}>
        <input
          type='number'
          value={value}
          min='0'
          max='1000'
          onChange={fromSliderChangeHandler}
        />
        <span>to</span>
        <input type='number' min='0' max='1000' />
      </div>
      <input
        type='range'
        min='0'
        max='1000'
        value={value}
        onChange={inputRangeChangeHandler}
      />
    </div>
  );
};
export default PriceRange;
