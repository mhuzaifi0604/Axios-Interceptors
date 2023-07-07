import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEHHZm5wXUZuDZSfGSVmK8u0ks61HdiZ0",
    authDomain: "axios-interception.firebaseapp.com",
    projectId: "axios-interception",
    storageBucket: "axios-interception.appspot.com",
    messagingSenderId: "88227788875",
    appId: "1:88227788875:web:3ab5ce86f79b81410935ce",
    measurementId: "G-TGWJSXYDS4"
  };
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const Auth_Service = {
    login: async(email, password) =>{
        try {
            
        } catch (error) {
            
        }
    }
}