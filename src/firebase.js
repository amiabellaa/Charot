import firebase from "firebase/compat/app";
import "firebase/compat/database";


const firebaseConfig = {
    apiKey: "AIzaSyANM6UXd5yVL0pjVpVMVJfPXjiTsTNZ2-4",
    authDomain: "react-contact-amiabel.firebaseapp.com",
    projectId: "react-contact-amiabel",
    storageBucket: "react-contact-amiabel.appspot.com",
    messagingSenderId: "74445755155",
    appId: "1:74445755155:web:a47e28a0d5de29375ac0e6"
  };
  
const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();