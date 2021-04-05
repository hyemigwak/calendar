import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAO1HGZpGkBZd3K0o-3znPQdbTW8VxtYvc",
    authDomain: "calendar-233c4.firebaseapp.com",
    projectId: "calendar-233c4",
    storageBucket: "calendar-233c4.appspot.com",
    messagingSenderId: "912949342809",
    appId: "1:912949342809:web:12da0b3ec7d74d49ca7748",
    measurementId: "G-SLN3BN1ZFF"
}

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};
