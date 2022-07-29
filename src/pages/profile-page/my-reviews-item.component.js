import styles from './my-reviews-item.module.css';
import Rating from '../../components/rating/rating.component';
import useFormatDate from '../../hook/use-format-date.component';

const MyReviewsItem = () => {
  const d = new Date();
  const { formatedDate } = useFormatDate(d);
  return (
    <div className={styles['my-reviews-item']}>
      <div className={styles.product}>
        <img src={require('../../images/burger.png')} alt='' />
        <h3>Beef Burger</h3>
      </div>
      <div className={styles.comment}>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regialia.
        </p>
        <span>{formatedDate}</span>
      </div>
      <div className={styles.rating}>
        <Rating rates={4} />
      </div>
    </div>
  );
};
export default MyReviewsItem;
