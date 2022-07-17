import styles from './form-input.module.css';

const FormInput = ({
  label,
  children,
  isValid,
  invalidStyle,
  ...otherProps
}) => {
  const invalid = invalidStyle ? styles.invalid : '';
  const successClasses = isValid ? styles.success : '';
  return (
    <div className={styles['form-input']}>
      {label && (
        <label className={styles['input-label']} htmlFor={label}>
          {label}
        </label>
      )}
      {!children && (
        <input
          className={`${styles['input-field']} ${invalid} ${successClasses}`}
          id={label}
          {...otherProps}
        ></input>
      )}
      {children}
    </div>
  );
};

export default FormInput;
