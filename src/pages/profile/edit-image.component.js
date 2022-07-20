import { useState } from 'react';
import styles from './edit-image.module.css';
import FileUpload from './file-upload.component';

const EditImage = () => {
  const [imageUrl, setImageUrl] = useState();
  return (
    <div className={styles['edit-image']}>
      <FileUpload />
    </div>
  );
};

export default EditImage;
