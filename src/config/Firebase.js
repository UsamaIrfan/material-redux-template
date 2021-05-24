import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyASg4nATdV-vU27siQFg8ygSj7IK9bejSk",
    authDomain: "databasepractise-f6f20.firebaseapp.com",
    databaseURL: "https://databasepractise-f6f20.firebaseio.com",
    projectId: "databasepractise-f6f20",
    storageBucket: "databasepractise-f6f20.appspot.com",
    messagingSenderId: "224795211416",
    appId: "1:224795211416:web:e4f7fdb174e331da85c2ed",
    measurementId: "G-VC95YXWSHL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore()
    // const timeStamp = projectFirestore.FieldValue.serverTimestamp;

export { firebase, auth, projectStorage, projectFirestore }