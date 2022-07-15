import styles from './heading-bar.module.css';

const HeadingBar = ({ pageName }) => {
  return (
    <div className={styles['heading-bar']}>
      <h2>{pageName}</h2>
      <p>
        Home / <span className={styles['primary-color']}>{pageName}</span>
      </p>
    </div>
  );
};
export default HeadingBar;
