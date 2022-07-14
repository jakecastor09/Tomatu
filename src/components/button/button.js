import styles from './button.module.css';
const Button = ({ className, disabled, children, ...otherProps }) => {
  return (
    <button
      className={`${disabled ? styles['disabled-button'] : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
