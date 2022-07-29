import styles from './my-reviews.module.css';
import InfoContainer from './info-container.component';
import MyReviewsItem from './my-reviews-item.component';
const MyReviews = () => {
  return (
    <InfoContainer title='My Reviews'>
      <MyReviewsItem />
      <MyReviewsItem />
      <MyReviewsItem />
    </InfoContainer>
  );
};

export default MyReviews;
