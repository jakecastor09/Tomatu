import styles from './address.module.css';
import InfoContainer from './info-container.component';
const Address = props => {
  return (
    <InfoContainer title='Address'>
      <div className={styles['address-container']}>
        <div className={styles['address-details']}>
          <p className={styles.address}>
            2229 Spruce Drive Bridgeville, Pennsylvania 15017, United States of
            America.
          </p>
          <p className={styles['remove-btn']}>Remove</p>
        </div>
        <p className={styles.phoneNumber}>(+1)724-859-9092</p>
      </div>
      <div className={styles['add-address']}>+ Add a New Address Line</div>
    </InfoContainer>
  );
};
export default Address;
