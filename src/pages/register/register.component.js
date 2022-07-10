import styles from './Register.module.css';
import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
const Register = () => {
  return (
    <>
      <section className='register'>
        <div className='register__form'>
          <FormInput placeholder='Mobile Number' />
        </div>
      </section>
    </>
  );
};
export default Register;
