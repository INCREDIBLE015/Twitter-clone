import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAgmSRWcSLGU0DzDZrAikG8Pmq0B1QT52A",
    authDomain: "twitter-clone-bcad9.firebaseapp.com",
    databaseURL: "https://twitter-clone-bcad9.firebaseio.com",
    projectId: "twitter-clone-bcad9",
    storageBucket: "twitter-clone-bcad9.appspot.com",
    messagingSenderId: "419448630415",
    appId: "1:419448630415:web:2098e313235ad0e06f54fa",
    measurementId: "G-1H68683P52"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;