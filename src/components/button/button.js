import styles from './button.module.css';
const Button = ({ className, disabled, children, small, ...otherProps }) => {
  return (
    <button
      className={`${disabled ? styles['disabled-button'] : ''} ${
        small && styles.small
      } ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
