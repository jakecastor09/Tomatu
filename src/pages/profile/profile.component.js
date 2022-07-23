import styles from './profile.module.css';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import HeadingBar from '../../components/heading-bar/heading-bar.component';
import EditImage from './edit-image.component';
import Form from './form.component';
const Profile = () => {
  return (
    <section className={`${styles['profile']} container`}>
      <Navbar />
      <div className={styles.flex}>
        <Sidebar />
        <div className={styles['profile__container']}>
          <HeadingBar pageName='Profile' />
          <div className={styles['profile__content']}>
            <div className={styles['profile__content--edit-image']}>
              <EditImage />
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
