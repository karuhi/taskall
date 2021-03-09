import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyDhIbY2h5Tkt02Z1yE2telLYzkAN0mrFgM",
  authDomain: "taskall-eade1.firebaseapp.com",
  projectId: "taskall-eade1",
  storageBucket: "taskall-eade1.appspot.com",
  messagingSenderId: "800203317658",
  appId: "1:800203317658:web:198c728b754f9be86eda23",
  measurementId: "G-C3LD9BG41S",
});

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
