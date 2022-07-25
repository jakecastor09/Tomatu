import { useState } from 'react';
import styles from './login-page.module.css';
import Features from '../../components/login-and-register/features/features.component';
import Form from '../../components/login-and-register/form/form.component';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button';
const Login = () => {
  const [isAgreeToTermAndCondition, setIsAgreeToTermAndCondition] =
    useState(false);
  const link = (
    <p>
      Don't have an account yet?{' '}
      <span className={styles['primary-color']}>Register Now</span>
    </p>
  );
  const checkBoxHandler = event => {
    setIsAgreeToTermAndCondition(event.target.checked);
  };
  return (
    <section class={styles.login}>
      <div className={styles.features}>
        <Features name='login' />
      </div>
      <div className={styles['login__form']}>
        <Form link={link}>
          <p>
            <span className={styles['primary-color']}>
              <b>Login</b>
            </span>{' '}
            to your Account to manage all the service and explore our tools
          </p>
          <form action='#'>
            <FormInput placeholder='Enter your Mobile Number & Email ID' />
            <FormInput placeholder='Password' type='password' />
            <div className={styles['login__agreement']}>
              <input type='checkbox' onChange={checkBoxHandler} />
              <p>
                By creating this account, you agree to our{' '}
                <span style={{ color: 'var(--primary-color)' }}>
                  Terms & Conditions & Privacy Policy.
                </span>
              </p>
            </div>
            <Button disabled={!isAgreeToTermAndCondition}>Login</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Login;
