import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCuYzrf6ycZIqrfd4mDo4aX2bvaRHkmiWE",
    authDomain: "pro-71-d67e5.firebaseapp.com",
    projectId: "pro-71-d67e5",
    storageBucket: "pro-71-d67e5.appspot.com",
    messagingSenderId: "981419064310",
    appId: "1:981419064310:web:19a8012276cb2fda8be5d7"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
