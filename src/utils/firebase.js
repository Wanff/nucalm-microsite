import * as firebase from "firebase/app";
import "firebase/auth";

const base = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
});

let email = "empty"
let password = "filler"
base.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
.then(function(){
  return base.auth().signInWithEmailAndPassword(email, password);
}).catch(function(error){
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("error" + errorCode + errorMessage)
});

export default base;