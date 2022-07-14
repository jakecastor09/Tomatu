import styles from './form-input.module.css';

const FormInput = ({ label, isValid, invalidStyle, ...otherProps }) => {
  const invalid = invalidStyle ? styles.invalid : '';
  const successClasses = isValid ? styles.success : '';
  return (
    <div className={styles['form-input']}>
      {label && (
        <label className={styles['input-label']} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className={`${styles['input-field']} ${invalid} ${successClasses}`}
        id={label}
        {...otherProps}
      ></input>
    </div>
  );
};

export default FormInput;
