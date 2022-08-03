import styles from './favourite-page.module.css';
import PageContainer from '../../components/page-container/page-container.component';
import HeadingBar from '../../components/heading-bar/heading-bar.component';
import FavouriteItem from './favourite-item.component';

const FavouritePage = () => {
  return (
    <PageContainer>
      <div className={styles['fovourite-page']}>
        <HeadingBar pageName='Favourite Page' />
        <div className={styles['favourite-page__content']}>
          <FavouriteItem />
          <FavouriteItem />
          <FavouriteItem />
          <FavouriteItem />
          <FavouriteItem />
          <FavouriteItem />
          <FavouriteItem />
          <FavouriteItem />
          <FavouriteItem />
          <FavouriteItem />
        </div>
      </div>
    </PageContainer>
  );
};
export default FavouritePage;
