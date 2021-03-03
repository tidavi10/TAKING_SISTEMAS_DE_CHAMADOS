import firebase from "firebase"




const firebaseConfig = {
    apiKey: "AIzaSyDbfLfkVm9DchVziuJN0XvP81QaCx_EYjg",
    authDomain: "sociallogin-4d50b.firebaseapp.com",
    projectId: "sociallogin-4d50b",
    storageBucket: "sociallogin-4d50b.appspot.com",
    messagingSenderId: "676851831713",
    appId: "1:676851831713:web:75622108d3f0f4cc6731e0",
    measurementId: "G-44Z96P6B34"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;