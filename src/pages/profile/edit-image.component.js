import styles from './edit-image.module.css';
import FileUpload from './file-upload.component';

const EditImage = () => {
  return (
    <div className={styles['edit-image']}>
      <FileUpload />
    </div>
  );
};

export default EditImage;
