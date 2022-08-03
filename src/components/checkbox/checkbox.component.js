import styles from './checkbox.module.css';
const CheckBox = ({
  name,
  onChange,
  isChecked,
  value,
  innerRef,
  color,
  textColor,
  checked,
}) => {
  return (
    <div className={`${styles.checkbox} ${styles[color]}`}>
      <input
        type='checkbox'
        checked={isChecked || checked}
        name={name}
        value={value}
        onChange={onChange}
        ref={innerRef}
      />
      <label htmlFor='name' className={styles[textColor]}>
        {name}
      </label>
    </div>
  );
};
export default CheckBox;
