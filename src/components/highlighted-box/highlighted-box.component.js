import styles from './highlighted-box.module.css';
const HighlightedBox = ({ color, children }) => {
  return <span className={`${styles.text} ${styles[color]}`}>{children}</span>;
};
export default HighlightedBox;
