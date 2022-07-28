import styles from './profile-page.module.css';
import PageContainer from '../../components/page-container/page-container.component';
import HeadingBar from '../../components/heading-bar/heading-bar.component';
import ProfileDetails from './profile-details.component';
import PersonalInformation from './personal-information';
import MyOrder from './my-order.component';
const ProfilePage = () => {
  return (
    <PageContainer>
      <div className={styles['container']}>
        <HeadingBar pageName='Profile Page' />
        <div className={styles['profile-page__content']}>
          <div className={styles['profile-page__details']}>
            <ProfileDetails />
          </div>
          <div className={styles['profile-page__info']}>
            <PersonalInformation />
            <MyOrder />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProfilePage;
