import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAGbkzTf1FIXkbL2GVJzqgk7SoXU9SfKLY',
  authDomain: 'auth-example-c33c3.firebaseapp.com',
  projectId: 'auth-example-c33c3',
  storageBucket: 'auth-example-c33c3.appspot.com',
  messagingSenderId: '989156291483',
  appId: '1:989156291483:web:30644de21c608ba15be73e',
  databaseURL: 'https://auth-example-c33c3-default-rtdb.europe-west1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getDatabase(app);
export default dataBase;
