import Card from '../Card/Card.component';
import styles from './review.module.css';
const Review = ({ image, name, comment, star, date }) => {
  return (
    <Card>
      <div className={styles.image}>
        <img src={require('../../images/burger.png')} alt='' />
      </div>
      <div className={styles.content}>
        <h3>Beef Burger</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          labore aspernatur.
        </p>
      </div>
      <div className={styles['time-review']}></div>
    </Card>
  );
};

export default Review;
