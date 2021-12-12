import firebase from "firebase/app";
import "firebase/firestore";
// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCs9cmK_gb8TDtKjv1Ay53NtBk2do28wXA",
  authDomain: "qclima-app.firebaseapp.com",
  projectId: "qclima-app",
  storageBucket: "qclima-app.appspot.com",
  messagingSenderId: "47055886081",
  appId: "1:47055886081:web:2198bd9d33a1c994fcad00"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default {
  firebase,
  db,
};
