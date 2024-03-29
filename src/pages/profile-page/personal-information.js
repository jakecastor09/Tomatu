import styles from './personal-information.module.css';
import InfoContainer from './info-container.component';
const PersonalInformation = () => {
  return (
    <InfoContainer title='Personal Information'>
      <div className={styles.content}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <h3>Phone</h3>
            <p>09557613423</p>
          </li>
          <li className={styles.item}>
            <h3>Birthday</h3>
            <p>Aug 2, 2022</p>
          </li>
          <li className={styles.item}>
            <h3>Gender</h3>
            <p>Male</p>
          </li>
          <li className={styles.item}>
            <h3>Email</h3>
            <p>rencelaw70@gmail.com</p>
          </li>
          <li className={styles.item}>
            <h3>Website</h3>
            <p>www.facebook.com</p>
          </li>
          <li className={styles.item}>
            <h3>Location</h3>
            <p>Philippines</p>
          </li>
        </ul>
      </div>
    </InfoContainer>
  );
};
export default PersonalInformation;
