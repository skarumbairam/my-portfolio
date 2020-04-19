import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC55JkwmNyqOlUv8lGrCgmsEvGkCU9uTwI",
  authDomain: "meeting-logapp-spa.firebaseapp.com",
  databaseURL: "https://meeting-logapp-spa.firebaseio.com",
  projectId: "meeting-logapp-spa",
  storageBucket: "meeting-logapp-spa.appspot.com",
  messagingSenderId: "1002313534093",
  appId: "1:1002313534093:web:53247ff9f7d7290494b0c4",
  measurementId: "G-3EWF3J8GL0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;