// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhngtImjh381_g0SnAcx1vkRh4rNUNH9Q",
  authDomain: "wheater-app-b4c60.firebaseapp.com",
  projectId: "wheater-app-b4c60",
  storageBucket: "wheater-app-b4c60.appspot.com",
  messagingSenderId: "765351359640",
  appId: "1:765351359640:web:95ccd682822d3582364ced",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default {
  firebase,
  db,
};
