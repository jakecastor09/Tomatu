import styles from './register.module.css';
import React from 'react';
import Features from '../../components/login-and-register/features/features.component';
import FormInput from '../../components/form-input/form-input.component';
import Form from '../../components/login-and-register/form/form.component';
import Button from '../../components/button/button';
import useInput from '../../hook/use-input';

const enteredNumberValidation = value => {
  if (isNaN(value) || value.length <= 10) return false;
  return true;
};

const enteredPasswordValidation = value => {
  return value.length > 6;
};

const inputNumberErrorMessage =
  ' Invalid input; you need to enter more than 9 numbers.';
const inputPasswordErrorMessage = 'Password must be more than 5 letters';

const Register = () => {
  const {
    errorMessageComponent: inputNumberErrorMessageComponent,
    hasError: numberInputHasError,
    inputBlurHandler: numberBlurHandler,
    isValid: enteredNumberIsValid,
    reset: resetNumberInput,
    value: enteredNumber,
    valueChangeHandler: numberChangeHandler,
    valueInputClasses: numberInputClasses,
  } = useInput(enteredNumberValidation, inputNumberErrorMessage);

  const {
    errorMessageComponent: inputPasswordErrorMessageComponent,
    hasError: passwordInputHasError,
    inputBlurHandler: passwordBlurHandler,
    isValid: enteredPasswordIsValid,
    reset: resetPasswordInput,
    value: enteredPassword,
    valueChangeHandler: passwordChangeHandler,
    valueInputClasses: passwordInputClasses,
  } = useInput(enteredPasswordValidation, inputPasswordErrorMessage);

  const link = (
    <p>
      Already have an account? Click here{' '}
      <span className={styles['primary-color']}>Login</span>
    </p>
  );

  let formIsValid = false;
  if (
    !passwordInputHasError &&
    enteredPasswordIsValid &&
    !numberInputHasError &&
    enteredNumberIsValid
  )
    formIsValid = true;

  return (
    <section className={`${styles.register} container`}>
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
            <FormInput
              isValid={enteredNumberIsValid}
              invalidStyle={numberInputClasses}
              id='number'
              placeholder='Mobile Number'
              onChange={numberChangeHandler}
              onBlur={numberBlurHandler}
              value={enteredNumber}
            />
            {numberInputHasError && inputNumberErrorMessageComponent}

            <FormInput
              isValid={enteredPasswordIsValid}
              invalidStyle={passwordInputClasses}
              type='password'
              id='password'
              placeholder='Password'
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
            />
            {passwordInputHasError && inputPasswordErrorMessageComponent}

            <FormInput type='email' id='email' placeholder='Email ID' />
            <div className={styles['register__agreement']}>
              <input type='checkbox' />
              <p>
                By creating this account, you agree to our{' '}
                <span style={{ color: 'var(--primary-color)' }}>
                  Terms & Conditions & Privacy Policy.
                </span>
              </p>
            </div>
            <Button disabled={!formIsValid}>Register Now</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};
export default Register;
