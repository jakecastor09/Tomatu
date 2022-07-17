import styles from './text-area.module.css';
const TextArea = ({ name, ...otherProps }) => {
  return (
    <textarea
      className={styles.textarea}
      name={name}
      id={name}
      {...otherProps}
    />
  );
};
export default TextArea;
