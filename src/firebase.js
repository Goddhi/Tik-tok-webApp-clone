// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyC7jUbMVuOoiH-9pp082fB5eH2owHkjbUo",
    authDomain: "tik-tok-clone3-b114b.firebaseapp.com",
    projectId: "tik-tok-clone3-b114b",
    storageBucket: "tik-tok-clone3-b114b.appspot.com",
    messagingSenderId: "1063470025878",
    appId: "1:1063470025878:web:ff3a9c4076ae83bdd6c6b7",
    measurementId: "G-R3C3GM678B"
  };

  const firebaseApp = 
  firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;