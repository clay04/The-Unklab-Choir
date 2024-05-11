// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAXBoA3329XYJKimrYBMPhUsEeGpIl2cUQ',
  authDomain: 'the-unklab-choir.firebaseapp.com',
  projectId: 'the-unklab-choir',
  storageBucket: 'the-unklab-choir.appspot.com',
  messagingSenderId: '804136019510',
  appId: '1:804136019510:web:33a8fd807d962dd3bfda97',
  measurementId: 'G-E4YHGVVLBT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
