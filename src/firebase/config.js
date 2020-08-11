import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBY1jWdsRMYiyfvidbWRCNCRjAOD4A4uII",
  authDomain: "firegram-tutorial.firebaseapp.com",
  databaseURL: "https://firegram-tutorial.firebaseio.com",
  projectId: "firegram-tutorial",
  storageBucket: "firegram-tutorial.appspot.com",
  messagingSenderId: "442877095541",
  appId: "1:442877095541:web:2f61069fa204312ada923c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
