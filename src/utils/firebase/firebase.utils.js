// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth,
          signInWithRedirect,
          signInWithPopup,
          GoogleAuthProvider }
        from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
}
from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBl58J8ZKT6KFqUZvDBnTIHdSrmeOW_BUI",
  authDomain: "e-commerce-db-dd7bc.firebaseapp.com",
  projectId: "e-commerce-db-dd7bc",
  storageBucket: "e-commerce-db-dd7bc.appspot.com",
  messagingSenderId: "487372048152",
  appId: "1:487372048152:web:89958c778ebee9275c806d",
  measurementId: "G-1CBD41NLMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  
  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    }
    catch (error){
      console.log(error);
    }
  }

  return userDocRef;
}