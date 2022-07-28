import Card from '../card/card.component';
import styles from './review.module.css';
import useFormatDate from '../../hook/use-format-date.component';
import Rating from '../rating/rating.component';
const Review = ({ image, name, comment, star, date }) => {
  const d = new Date();
  const { formatedDate } = useFormatDate(d);

  return (
    <Card>
      <div className={styles.review}>
        <div className={styles.image}>
          <img src={require('../../images/burger.png')} alt='' />
        </div>
        <div className={styles.content}>
          <h3>Beef Burger</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ad.
          </p>
        </div>
        <div className={styles['rates-and-date']}>
          <Rating rates={star} />
          <span className={styles.date}>{formatedDate}</span>
        </div>
      </div>
    </Card>
  );
};

export default Review;
