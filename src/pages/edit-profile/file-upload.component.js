import { useEffect, useState } from 'react';
import { storage } from '../../firebase/index';
import ProfileContainer from '../../components/profile-container/profile-container.component';
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { v4 } from 'uuid';
import styles from './file-upload.module.css';
const FileUpload = () => {
  const defaultImageRef = ref(storage, 'defaultImage/');
  const [imageUpload, setImageUpload] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [prevImage, setPrevImage] = useState(null);
  const imageListRef = ref(storage, 'images/');

  //Display default image
  useEffect(() => {
    listAll(defaultImageRef).then(res => {
      const path = res.items[0];
      (async () => {
        const url = await getDownloadURL(path);
        setAvatar(url);
      })();
    });
  }, []);

  const inputChangeHandler = event => {
    const imageFiles = event.target.files[0];
    if (imageFiles) {
      setImageUpload(imageFiles);
    }
  };
  const handleUpload = async () => {
    //Delete previous image
    if (prevImage) {
      deleteObject(prevImage)
        .then(() => {
          console.log('File deleted Successfully');
        })
        .catch(error => {
          console.log(error);
        });
    }

    // Upload an image
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    await uploadBytes(imageRef, imageUpload);
    setPrevImage(imageRef);

    //Display an image
    listAll(imageListRef).then(response => {
      const fullPath = response.items[0];
      (async () => {
        const url = await getDownloadURL(fullPath);
        setAvatar(url);
      })();
    });
  };

  return (
    <ProfileContainer>
      <img className={styles['input-img']} src={avatar} alt='' />
      <input
        type='file'
        name='Edit Profile Image'
        onChange={inputChangeHandler}
        className={styles['input-file']}
      />
      <label className={styles['input-label']} onClick={handleUpload}>
        Edit Profile Image
      </label>
    </ProfileContainer>
  );
};
export default FileUpload;
