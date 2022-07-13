import styles from './form.module.css';
import * as Icon from 'react-feather';

const Form = ({ children, link }) => {
  return (
    <div className={styles.form}>
      <div className={styles['form__heading']}>
        <div className={styles['form__logo']}>
          <img src={require('../../../images/logo/Ellipse 1.webp')} alt='' />
          <h1>omatos</h1>
        </div>
      </div>
      {children}
      <div className={styles['social-media']}>
        <span>Or with Social Network</span>
        <ul className={styles['social-media__list']}>
          <li className={styles['icon']}>
            <Icon.Facebook />
          </li>
          <li className={styles['icon']}>
            <Icon.Twitter />
          </li>
          <li className={styles['icon']}>
            <Icon.Linkedin />
          </li>
          <li className={styles['icon']}>
            <Icon.Instagram />
          </li>
        </ul>

        <p>{link}</p>
      </div>
      <div className={styles['form__footer']}>
        &copy; <span className={styles['primary-color']}>Tomatus</span>. All
        Right Reserved
      </div>
    </div>
  );
};
export default Form;
