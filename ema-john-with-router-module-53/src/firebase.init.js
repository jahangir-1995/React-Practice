// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7hHSPz95CV82Kl3_ie6SvEqsR19cZRuU",
  authDomain: "ema-jhon-simple-m59.firebaseapp.com",
  projectId: "ema-jhon-simple-m59",
  storageBucket: "ema-jhon-simple-m59.appspot.com",
  messagingSenderId: "436592449695",
  appId: "1:436592449695:web:f52bb40ba291a9fda9aaaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;