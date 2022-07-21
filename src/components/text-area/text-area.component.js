import styles from './text-area.module.css';
const TextArea = ({ name, innerRef, ...otherProps }) => {
  return (
    <textarea
      className={styles.textarea}
      name={name}
      id={name}
      {...otherProps}
      ref={innerRef}
    />
  );
};
export default TextArea;
