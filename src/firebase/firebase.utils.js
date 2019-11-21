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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
