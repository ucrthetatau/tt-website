import * as firebase from 'firebase/app'; 
import 'firebase/storage'; 
import 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHCK9agcDEk0MRf25ZMNnBX5SoEIiiM2E",
  authDomain: "tt-2022-f45d7.firebaseapp.com",
  projectId: "tt-2022-f45d7",
  storageBucket: "tt-2022-f45d7.appspot.com",
  messagingSenderId: "700004125914",
  appId: "1:700004125914:web:e2ef6a0c65df4e6f8aa9e3",
  measurementId: "G-2GMBRMM2V7"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig); 
const storage = firebase.storage(); 
const firestore = firebase.firestore(); 

export { storage, firestore }; 