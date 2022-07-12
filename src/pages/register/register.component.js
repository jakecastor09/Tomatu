import styles from './Register.module.css';
import React from 'react';
import Features from '../../components/login-and-register/features/features.component';
import FormInput from '../../components/form-input/form-input.component';
const Register = () => {
  return (
    <>
      <section className='register'>
        {/* <Features name='register' /> */}
        <div className='register__form'>
          <FormInput placeholder='Mobile Number' />
        </div>
      </section>
    </>
  );
};
export default Register;
