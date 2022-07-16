import styles from './checkbox.module.css';
const CheckBox = ({ name, onChange, isChecked }) => {
  return (
    <div className={styles.checkbox}>
      <input
        type='checkbox'
        checked={isChecked}
        name={name}
        onChange={onChange}
      />
      <label htmlFor='name'>{name}</label>
    </div>
  );
};
export default CheckBox;
