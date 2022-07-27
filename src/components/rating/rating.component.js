import styles from './rating.module.css';
import Star from './star.component';
const Rating = ({ rates }) => {
  return (
    <div className={styles['rating']}>
      {[...Array(5)].map((item, index) => {
        return <Star active={index + 1 <= rates} />;
      })}
    </div>
  );
};
export default Rating;
