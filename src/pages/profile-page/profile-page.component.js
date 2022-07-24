import styles from './profile-page.module.css';
import PageContainer from '../../components/page-container/page-container.component';
import HeadingBar from '../../components/heading-bar/heading-bar.component';
const ProfilePage = () => {
  return (
    <PageContainer>
      <div className={styles['content-container']}>
        <HeadingBar pageName='Profile Page' />
      </div>
    </PageContainer>
  );
};

export default ProfilePage;
