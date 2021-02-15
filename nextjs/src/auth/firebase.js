import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCQRdKBlbhaFXnhs41XNFqfMiXkKt1EWcY',
  authDomain: 'stay-delivery-fa15e.firebaseapp.com',
  projectId: 'stay-delivery-fa15e',
  storageBucket: 'stay-delivery-fa15e.appspot.com',
  messagingSenderId: '890569079685',
  appId: '1:890569079685:web:6b203a69678f90e635e2ec',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
