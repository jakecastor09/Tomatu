import styles from './highlighted-box.module.css';
const HighlightedBox = ({ color, children }) => {
  return <span className={`${styles.text} ${color}`}>{children}</span>;
};
export default HighlightedBox;
