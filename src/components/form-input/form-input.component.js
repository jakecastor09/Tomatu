import styles from './form-input.module.css';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className={styles['form-input']}>
      {label && (
        <label className={styles['input-label']} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className={styles['input-field']}
        id={label}
        {...otherProps}
      ></input>
    </div>
  );
};

export default FormInput;
