import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAuOfuvkbLTFUBUj2ojFZO64_xzLrNJc9g",
    authDomain: "whats-app-clone-b1eff.firebaseapp.com",
    databaseURL: "https://whats-app-clone-b1eff.firebaseio.com",
    projectId: "whats-app-clone-b1eff",
    storageBucket: "whats-app-clone-b1eff.appspot.com",
    messagingSenderId: "920407888701",
    appId: "1:920407888701:web:c5f7bbdd7dc17b62a96b54",
    measurementId: "G-64FVS45ZGE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth  = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;