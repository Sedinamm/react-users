import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCD5qpAxOmvhQ8Jedu7QK37Y-cujGg7A3I",
    authDomain: "react-users-d6020.firebaseapp.com",
    projectId: "react-users-d6020",
    storageBucket: "react-users-d6020.appspot.com",
    messagingSenderId: "240133441093",
    appId: "1:240133441093:web:a5a6326a1b0bfce4df852c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;