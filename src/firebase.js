import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0xDsnhE00cv_17B5s50HiTU8lQ0S_sdA",
  authDomain: "whatsapp-abaca.firebaseapp.com",
  projectId: "whatsapp-abaca",
  storageBucket: "whatsapp-abaca.appspot.com",
  messagingSenderId: "23501630313",
  appId: "1:23501630313:web:6eabeeee985db8feb62bf8",
  measurementId: "G-F7G5CTMG3S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
