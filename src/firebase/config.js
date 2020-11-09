import firebase from "firebase"

const config  = {
    apiKey: "AIzaSyDmCNzLljfPcg9rz4LdqMtO9hS2lSsksZA",
    authDomain: "myimagesapp-4add1.firebaseapp.com",
    databaseURL: "https://myimagesapp-4add1.firebaseio.com",
    projectId: "myimagesapp-4add1",
    storageBucket: "myimagesapp-4add1.appspot.com",
    messagingSenderId: "914487141522",
    appId: "1:914487141522:web:aecc9ad9e8edc5779b324b",
    measurementId: "G-VJ0ZCM9912"
}

export const firebaseui = {
    signInFlow : "popup",
    signInOptions : [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ]

}
firebase.initializeApp(config);

export default firebase;
