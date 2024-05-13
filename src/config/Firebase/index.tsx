// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXBoA3329XYJKimrYBMPhUsEeGpIl2cUQ",
  authDomain: "the-unklab-choir.firebaseapp.com",
  databaseURL: "https://the-unklab-choir-default-rtdb.firebaseio.com",
  projectId: "the-unklab-choir",
  storageBucket: "the-unklab-choir.appspot.com",
  messagingSenderId: "804136019510",
  appId: "1:804136019510:web:33a8fd807d962dd3bfda97",
  measurementId: "G-E4YHGVVLBT",
  dabaseURL: 'https://the-unklab-choir-default-rtdb.firebaseio.com/',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default app