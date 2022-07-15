import styles from './profile.module.css';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import HeadingBar from '../../components/heading-bar/heading-bar.component';
const Profile = () => {
  return (
    <>
      <Navbar />
      <div className={styles.flex}>
        <Sidebar />
        <HeadingBar pageName='Profile' />
      </div>
    </>
  );
};

export default Profile;
