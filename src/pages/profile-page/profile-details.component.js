import { useEffect, useState } from 'react';
import ProfileContainer from '../../components/profile-container/profile-container.component';
import { listAll, getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebase/index';
import styles from './profile-details.module.css';
import Button from '../../components/button/button';
import SocialNetwork from '../../components/social-network/social-network.component';

const ProfileDetails = () => {
  const [avatar, setAvatar] = useState();
  const imageListRef = ref(storage, 'images/');

  useEffect(() => {
    listAll(imageListRef).then(response => {
      const fullPath = response.items[0];
      (async () => {
        const url = await getDownloadURL(fullPath);
        setAvatar(url);
      })();
    });
  }, [imageListRef]);

  return (
    <ProfileContainer>
      <img className={styles['avatar-image']} src={avatar} alt='' />
      <div className={styles.username}>Jake Castor</div>
      <div className={styles.work}>Art Designer</div>
      <div className={styles.membership}>Membership in 3 years</div>
      <p className={styles['about-me']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        laboriosam.
      </p>
      <SocialNetwork />
      <Button>Edit Profile</Button>
    </ProfileContainer>
  );
};
export default ProfileDetails;
