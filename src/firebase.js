// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBKoZ9LRsNSSJDhRBVV046UZv_tAcmJ9Ik",
    authDomain: "whats-app-clone-c48b1.firebaseapp.com",
    projectId: "whats-app-clone-c48b1",
    storageBucket: "whats-app-clone-c48b1.appspot.com",
    messagingSenderId: "406272321035",
    appId: "1:406272321035:web:e6a65b3afc5c8870c7090e",
    measurementId: "G-V9P8KFVCDF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;