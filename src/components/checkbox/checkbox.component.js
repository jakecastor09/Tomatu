import styles from './checkbox.module.css';
const CheckBox = ({ name, onChange, isChecked, innerRef }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type='checkbox'
        checked={isChecked}
        name={name}
        onChange={onChange}
        ref={innerRef}
      />
      <label htmlFor='name'>{name}</label>
    </div>
  );
};
export default CheckBox;
