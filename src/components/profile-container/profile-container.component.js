import styles from './profile-container.module.css';
const ProfileContainer = ({ children }) => {
  return <div className={styles.profile}>{children}</div>;
};

export default ProfileContainer;
