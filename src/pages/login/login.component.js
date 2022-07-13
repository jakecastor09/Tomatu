import styles from './login.module.css';
import Features from '../../components/login-and-register/features/features.component';
import Form from '../../components/login-and-register/form/form.component';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button';
const Login = () => {
  const link = (
    <p>
      Don't have an account yet?{' '}
      <span className={styles['primary-color']}>Register Now</span>
    </p>
  );
  return (
    <section class={styles.login}>
      <div className={styles.features}>
        <Features name='login' />
      </div>
      <div className={styles['login__form']}>
        <Form link={link}>
          <p>
            <span className={styles['primary-color']}>Login</span> to your
            Account to manage all the service and explore our tools
          </p>
          <form action='#'>
            <FormInput placeholder='Enter your Mobile Number & Email ID' />
            <FormInput placeholder='Password' />
            <div className={styles['login__agreement']}>
              <input type='checkbox' />
              <p>
                By creating this account, you agree to our{' '}
                <span style={{ color: 'var(--primary-color)' }}>
                  Terms & Conditions & Privacy Policy.
                </span>
              </p>
            </div>
            <Button>Login</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Login;
