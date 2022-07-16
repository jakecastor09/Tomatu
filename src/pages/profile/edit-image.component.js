import { useState } from 'react';
import styles from './edit-image.module.css';

const EditImage = () => {
  const [imageUrl, setImageUrl] = useState();
  return (
    <div className={styles['edit-image']}>
      <img src='' alt='' />
      <h3 className={styles['edit-image__name']}>Edit Profile Image</h3>
    </div>
  );
};

export default EditImage;
