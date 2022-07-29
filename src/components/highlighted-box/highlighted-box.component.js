import styles from './highlighted-box.module.css';
const HighlightedBox = ({ color }) => {
  return <span className={`${styles.text} ${styles[color]}`}>$25.00</span>;
};
export default HighlightedBox;
