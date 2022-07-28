import { useRef, useEffect, useReducer } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CheckBoxGroup from '../../components/checkbox-group/checkbox-group.component';
import Button from '../../components/button/button';
import TextArea from '../../components/text-area/text-area.component';
import styles from './form.module.css';

import useGetData from '../../hook/use-get-data.component';

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

    case 'OTHER_DETAILS': {
      const otherDetails = {
        ...state.otherDetails,
      };
      for (const item in action.otherDetails) {
        if (action.otherDetails[item]) {
          otherDetails[item] = action.otherDetails[item];
        }
      }
      return { ...state, otherDetails };
    }

    case 'SOCIAL_MEDIA': {
      const socialMedia = {
        ...state.socialMedia,
      };

      for (const item in action.socialMedia) {
        if (action.socialMedia[item]) {
          socialMedia[item] = action.socialMedia[item];
        }
      }
      return { ...state, socialMedia };
    }
    default: {
      return state;
    }
  }
};

const Form = () => {
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
  const linkedInURLRef = useRef();

  const { fetchData } = useGetData(
    'https://tomatu-5dbea-default-rtdb.firebaseio.com/profile.json'
  );

  const [state, dispatch] = useReducer(reducer, defaultProfileData);

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
    const linkedInURLValue = linkedInURLRef.current.value;

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

    dispatch({
      type: 'OTHER_DETAILS',
      otherDetails: {
        work: workValue,
        membership: membershipValue,
        website: websiteValue,
      },
    });

    dispatch({
      type: 'SOCIAL_MEDIA',
      socialMedia: {
        facebookURL: facebookURLValue,
        twitterURL: twitterURLValue,
        linkedInURL: linkedInURLValue,
      },
    });
  };

  useEffect(() => {
    (async () => {
      const responseData = await fetchData();
      await fetch(
        'https://tomatu-5dbea-default-rtdb.firebaseio.com/profile.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            state,
          }),
        }
      );
    })();
  }, [state, fetchData]);

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
        <FormInput label='Linked In*' innerRef={linkedInURLRef} />
        <Button small={true}>Save Profile</Button>
      </form>
    </div>
  );
};

export default Form;
