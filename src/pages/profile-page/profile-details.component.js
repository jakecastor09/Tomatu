import { useEffect, useState } from 'react';
import ProfileContainer from '../../components/profile-container/profile-container.component';
import { listAll, getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../firebase/index';
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
      <img src={avatar} alt='' />
      <p>Jake Castor</p>
    </ProfileContainer>
  );
};
export default ProfileDetails;
