import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCZc_RTNRaJ6DhAhplUZkiQk0maOLQ260k",
  authDomain: "crwn-db-6ad33.firebaseapp.com",
  databaseURL: "https://crwn-db-6ad33.firebaseio.com",
  projectId: "crwn-db-6ad33",
  storageBucket: "crwn-db-6ad33.appspot.com",
  messagingSenderId: "1050903934330",
  appId: "1:1050903934330:web:4606aee2b60c73360552c3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
