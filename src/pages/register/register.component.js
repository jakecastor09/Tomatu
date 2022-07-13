import styles from './register.module.css';
import React from 'react';
import Features from '../../components/login-and-register/features/features.component';
import FormInput from '../../components/form-input/form-input.component';
import Form from '../../components/login-and-register/form/form.component';
import Button from '../../components/button/button';
const Register = () => {
  const link = (
    <p>
      Already have an account? Click here{' '}
      <span className={styles['primary-color']}>Login</span>
    </p>
  );
  return (
    <section className={styles.register}>
      <div className={styles.features}>
        <Features name='register' />
      </div>
      <div className='register__form'>
        <Form link={link}>
          <p>
            Become a <span className={styles['primary-color']}>Tomatus</span>{' '}
            Member today & Enjoy{' '}
            <span className={styles['primary-color']}>$25</span> off of your
            next Meal
          </p>
          <form action='#'>
            <FormInput placeholder='Mobile Number' />
            <FormInput placeholder='Password' />
            <FormInput placeholder='Email ID' />
            <div className={styles['register__agreement']}>
              <input type='checkbox' />
              <p>
                By creating this account, you agree to our{' '}
                <span style={{ color: 'var(--primary-color)' }}>
                  Terms & Conditions & Privacy Policy.
                </span>
              </p>
            </div>

            <Button>Register Now</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};
export default Register;
