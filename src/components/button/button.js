import styles from './button.module.css';
const Button = ({ className, children, ...otherProps }) => {
  return <button {...otherProps}>{children}</button>;
};
export default Button;
