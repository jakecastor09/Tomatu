import { useState, useRef, useEffect, useReducer } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CheckBoxGroup from '../../components/checkbox-group/checkbox-group.component';
import Button from '../../components/button/button';
import TextArea from '../../components/text-area/text-area.component';
import styles from './form.module.css';

const defaultProfileData = {
  basicInfo: {
    userName: '',
    password: '',
    gender: '',
    dateOfBirth: '',
    aboutMe: '',
    phoneNumber: '',
    location: '',
    emailId: '',
  },
  otherDetails: {
    work: '',
    membership: '',
    website: '',
  },

  socialMedia: {
    facebookURL: '',
    twitterURL: '',
    linkedInURL: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'BASIC_INFO': {
      const basicInfo = {
        ...state.basicInfo,
      };
      for (const item in action.basicInfo) {
        if (action.basicInfo[item]) {
          basicInfo[item] = action.basicInfo[item];
        }
      }
      return { ...state, basicInfo };
    }
    default: {
      return state;
    }
  }
};

const Form = () => {
  const [dataFromFirebase, setDataFromFirebase] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://tomatu-5dbea-default-rtdb.firebaseio.com/profile.json'
      );
      if (!response.ok) {
        console.log('Something went wrong!');
      }
      const responseData = await response.json();
      console.log(setDataFromFirebase(responseData.state));
    })();
  }, []);

  const [state, dispatch] = useReducer(reducer, dataFromFirebase);

  // Basic Info
  const userNameRef = useRef();
  const passwordRef = useRef();
  const genderRef = useRef();
  const dateOfBirthRef = useRef();
  const aboutMeRef = useRef();
  const phoneNumberRef = useRef();
  const locationRef = useRef();
  const emailIdRef = useRef();

  //Other Details
  const workRef = useRef();
  const membershipRef = useRef();
  const websiteRef = useRef();

  //Social Medial
  const facebookURLRef = useRef();
  const twitterURLRef = useRef();
  const linkedInRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    //Value from user input
    const userNameValue = userNameRef.current.value;
    const passwordValue = passwordRef.current.value;
    const genderValue = genderRef.current.value;
    const dateOfBirthValue = dateOfBirthRef.current.value;
    const aboutMeValue = aboutMeRef.current.value;
    const phoneNumberValue = phoneNumberRef.current.value;
    const locationValue = locationRef.current.value;
    const emailIdValue = emailIdRef.current.value;

    const workValue = workRef.current.value;
    const membershipValue = membershipRef.current.value;
    const websiteValue = websiteRef.current.value;

    const facebookURLValue = facebookURLRef.current.value;
    const twitterURLValue = twitterURLRef.current.value;
    const linkedInValue = linkedInRef.current.value;

    dispatch({
      type: 'BASIC_INFO',
      basicInfo: {
        userName: userNameValue,
        password: passwordValue,
        gender: genderValue,
        dateOfBirth: dateOfBirthValue,
        aboutMe: aboutMeValue,
        phoneNumber: phoneNumberValue,
        location: locationValue,
        emailId: emailIdValue,
      },
    });

    //set value in to profile data
    // setProfileData(prevValue => {
    //   //First Solution
    //   //* use the value of the previous value
    //   // userName: userNameValue || prevValue.basicInfo.userName,

    //   return {
    //     basicInfo: {
    //       userName: userNameValue || prevValue.basicInfo.userName,
    //       password: passwordValue || prevValue.basicInfo.password,
    //       gender: genderValue || prevValue.basicInfo.gender,
    //       dateOfBirth: dateOfBirthValue || prevValue.basicInfo.dateOfBirth,
    //       aboutMe: aboutMeValue || prevValue.basicInfo.aboutMe,
    //       phoneNumber: phoneNumberValue || prevValue.basicInfo.phoneNumberValue,
    //       location: locationValue || prevValue.basicInfo.location,
    //       emailId: emailIdValue || prevValue.basicInfo.emailId,
    //     },

    //     otherDetails: {
    //       work: workValue || prevValue.otherDetails.work,
    //       membership: membershipValue || prevValue.otherDetails.membership,
    //       website: websiteValue || prevValue.otherDetails.website,
    //     },
    //     socialMedia: {
    //       facebookURL: facebookURLValue || prevValue.socialMedia.facebookURL,
    //       twitterURL: twitterURLValue || prevValue.socialMedia.twitterURL,
    //       linkedInURL: linkedInValue || prevValue.socialMedia.linkedIn,
    //     },
    //   };
    // });
  };

  useEffect(() => {
    fetch('https://tomatu-5dbea-default-rtdb.firebaseio.com/profile.json', {
      method: 'PUT',
      body: JSON.stringify({
        state,
      }),
    });
  }, [state]);

  return (
    <div className={styles['profile__content--personal-info']}>
      <form
        className={styles['profile__content--form']}
        onSubmit={submitHandler}
      >
        <h1 className={styles['profile__content--title']}>
          Personal Information:
        </h1>
        <FormInput
          label='User Name*'
          innerRef={userNameRef}
          placeholder='Name'
        />
        <FormInput label='Gender*'>
          <CheckBoxGroup list={['Male', 'Female']} innerRef={genderRef} />
        </FormInput>
        <FormInput
          label='Date of Birth*'
          placeholder='DD/MM/YYYY'
          innerRef={dateOfBirthRef}
        />
        <FormInput
          label='Email ID*'
          placeholder='Enter your Email Address'
          type='email'
          innerRef={emailIdRef}
        />
        <FormInput
          label='Password*'
          type='password'
          placeholder='*************'
          innerRef={passwordRef}
        />
        <FormInput label='About Me*'>
          <TextArea
            name='About Me'
            placeholder='Write for..'
            innerRef={aboutMeRef}
          />
        </FormInput>
        <FormInput
          label='Membership*'
          placeholder='eg.2 years ago'
          innerRef={membershipRef}
        />
        <FormInput
          label='Work*'
          placeholder='eg.ui designer'
          innerRef={workRef}
        />
        <FormInput
          label='Phone No*'
          placeholder='eg.(+1) 123 456 7890'
          innerRef={phoneNumberRef}
        />
        <FormInput
          label='Location*'
          placeholder='City Name'
          innerRef={locationRef}
        />
        <FormInput
          label='Website*'
          placeholder='eg.www.demain.com'
          innerRef={websiteRef}
        />
        <FormInput label='Facebook URL*' innerRef={facebookURLRef} />
        <FormInput label='Twitter URL*' innerRef={twitterURLRef} />
        <FormInput label='Linked In*' innerRef={linkedInRef} />
        <Button className='small'>Save Profile</Button>
      </form>
    </div>
  );
};

export default Form;
