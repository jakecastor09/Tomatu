import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBgjYLpFxLfZA_8Zrs1woPFAHG0MoiEczk',
  authDomain: 'tomatu-5dbea.firebaseapp.com',
  projectId: 'tomatu-5dbea',
  storageBucket: 'tomatu-5dbea.appspot.com',
  messagingSenderId: '39051912174',
  appId: '1:39051912174:web:de1568dfa96fae2797a4ff',
  measurementId: 'G-YDSTLQ62WC',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
