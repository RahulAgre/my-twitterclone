// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD4srY8DLnWNn66ImkBqN9AMNs37KchVtM",
    authDomain: "twitter-clone-ui.firebaseapp.com",
    projectId: "twitter-clone-ui",
    storageBucket: "twitter-clone-ui.appspot.com",
    messagingSenderId: "1022807933377",
    appId: "1:1022807933377:web:93e68cf05bcf6b6e6fef40",
    measurementId: "G-3RBXGZYGSL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
