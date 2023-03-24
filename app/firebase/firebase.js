// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, setDoc, doc} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBznNa8t0_jre0_KTY82zTbMaPbbhtlWsE",
  authDomain: "starthack-stgallen.firebaseapp.com",
  projectId: "starthack-stgallen",
  storageBucket: "starthack-stgallen.appspot.com",
  messagingSenderId: "850083714302",
  appId: "1:850083714302:web:842c5c364b9857016f41af",
  measurementId: "G-L1PLGGEE32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore()
export const storage = getStorage(app)

export const registerUsers = async (email, password, data) => {
    try {
        createUserWithEmailAndPassword(auth, email, password).then((rep) => {
            setDoc(doc(db, 'Users', rep.user.uid),
            {
                email: email,
            },
            data
            )
        })
        
    } catch(e){
        return e
    }
}

export const loginUser = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch(e) {
        return(e)
    }
}

