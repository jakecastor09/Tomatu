import styles from './edit-profile.module.css';
import HeadingBar from '../../components/heading-bar/heading-bar.component';
import FileUpload from './file-upload.component';
import Form from './form.component';
import PageContainer from '../../components/page-container/page-container.component';
const EditProfile = () => {
  return (
    <PageContainer>
      <div className={styles['profile__container']}>
        <HeadingBar pageName='Profile' />
        <div className={styles['profile__content']}>
          <div className={styles['profile__content--edit-image']}>
            <FileUpload />
          </div>
          <Form />
        </div>
      </div>
    </PageContainer>
  );
};

export default EditProfile;
