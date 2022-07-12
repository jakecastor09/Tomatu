import styles from './form-input.module.css';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <>
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
    </>
  );
};

export default FormInput;
