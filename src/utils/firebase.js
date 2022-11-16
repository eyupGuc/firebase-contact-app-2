// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAH9qrOfV5SYp_c_Y20sudMN0epFNUWSOY",
  authDomain: "contact-app-version-2.firebaseapp.com",
  databaseURL: "https://contact-app-version-2-default-rtdb.firebaseio.com",
  projectId: "contact-app-version-2",
  storageBucket: "contact-app-version-2.appspot.com",
  messagingSenderId: "226436173334",
  appId: "1:226436173334:web:8c6ab6443ee22ccdf86f37"
};

const firebase = initializeApp(firebaseConfig);
export default firebase;