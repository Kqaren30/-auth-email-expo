import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
  
  apiKey: "AIzaSyC0EQTwPTfPBqRbiymR1B8PjZ3_R0BNIZs",
  authDomain: "usersmail-firebase-c1bae.firebaseapp.com",
  projectId: "usersmail-firebase-c1bae",
  storageBucket: "usersmail-firebase-c1bae.appspot.com",
  messagingSenderId: "1075010496135",
  appId: "1:1075010496135:web:3224917ef1f92a0e3e3a22"

};

console.log(Constants.manifest);

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;