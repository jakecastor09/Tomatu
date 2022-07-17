import styles from './profile.module.css';
import Navbar from '../../components/navbar/navbar.component';
import Sidebar from '../../components/sidebar/sidebar.component';
import HeadingBar from '../../components/heading-bar/heading-bar.component';
import FormInput from '../../components/form-input/form-input.component';
import EditImage from './edit-image.component';
import CheckBoxGroup from '../../components/checkbox-group/checkbox-group.component';
import TextArea from '../../components/text-area/text-area.component';
import Button from '../../components/button/button';
const Profile = () => {
  return (
    <section className={`${styles['profile']} container`}>
      <Navbar />
      <div className={styles.flex}>
        <Sidebar />
        <div className={styles['profile__container']}>
          <HeadingBar pageName='Profile' />
          <div className={styles['profile__content']}>
            <div className={styles['profile__content--edit-image']}>
              <EditImage />
            </div>
            <div className={styles['profile__content--personal-info']}>
              <form className={styles['profile__content--form']}>
                <h1 className={styles['profile__content--title']}>
                  Personal Information:
                </h1>
                <FormInput label='User Name*' placeholder='Name' />
                <FormInput label='Gender*'>
                  <CheckBoxGroup list={['Male', 'Female']} />
                </FormInput>
                <FormInput label='Date of Birth*' placeholder='DD/MM/YYYY' />
                <FormInput
                  label='Email ID*'
                  placeholder='Enter your Email Address'
                  type='email'
                />
                <FormInput
                  label='Password*'
                  type='password'
                  placeholder='*************'
                />
                <FormInput label='About Me*'>
                  <TextArea name='About Me' placeholder='Write for..' />
                </FormInput>

                <FormInput label='Membership*' placeholder='eg.2 years ago' />
                <FormInput label='Work*' placeholder='eg.ui designer' />
                <FormInput
                  label='Phone No*'
                  placeholder='eg.(+1) 123 456 7890'
                />
                <FormInput label='Location*' placeholder='City Name' />
                <FormInput label='Website*' placeholder='eg.www.demain.com' />
                <FormInput label='Facebook URL*' />
                <FormInput label='Twitter URL*' />
                <FormInput label='Linked In*' />
                <Button className='small'>Save Profile</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
