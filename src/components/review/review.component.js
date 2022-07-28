import Card from '../card/card.component';
import styles from './review.module.css';
import Rating from '../rating/rating.component';
const Review = ({ image, name, comment, star, date }) => {
  const d = new Date();
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);

  const formatDate = `${day} ${month} ${year},${('0' + d.getHours()).slice(
    -2
  )}:${('0' + d.getMinutes()).slice(-2)}${d.getHours() < 12 ? 'AM' : 'PM'} `;

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
          <span className={styles.date}>{formatDate}</span>
        </div>
      </div>
    </Card>
  );
};

export default Review;
