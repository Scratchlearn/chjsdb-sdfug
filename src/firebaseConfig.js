// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Example: Importing Firebase Authentication
// import { getFirestore } from 'firebase/firestore'; // Example: Importing Firestore
import { getDatabase } from 'firebase/database'; // For Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhYwfOsm00MYG6Ndhj6WmxXxugdRcK5F0",
    authDomain: "zymolandingpage.firebaseapp.com",
    projectId: "zymolandingpage",
    databaseURL: 'https://zymolandingpage-default-rtdb.firebaseio.com/',  //'https://zymolandingpage-default-rtdb.firebaseio.com/items/-O68SwlhIOmsJBz8PgyN'
    storageBucket: "/zymoLandingPage/MafnzHLnDCBv82bd3D9D " ,//"zymolandingpage.appspot.com"
    messagingSenderId: "900035259524",
    appId: "1:900035259524:web:127da843b354f0f6ba26d1",
    measurementId: "G-KK8TQK0PF1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
// const db = getFirestore(app);
const rtdb = getDatabase(app); // Realtime Database

export { auth,  rtdb };





