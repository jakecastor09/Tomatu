import styles from './checkbox.module.css';
const CheckBox = ({ name, onChange, isChecked, value, innerRef }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type='checkbox'
        checked={isChecked}
        name={name}
        value={value}
        onChange={onChange}
        ref={innerRef}
      />
      <label htmlFor='name'>{name}</label>
    </div>
  );
};
export default CheckBox;
