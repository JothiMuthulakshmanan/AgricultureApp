import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv-Xl0qe8ROS3_9x5Znw2suG77iBnniCU",
  authDomain: "reactnative-13983.firebaseapp.com",
  projectId: "reactnative-13983",
  storageBucket: "reactnative-13983.appspot.com",
  messagingSenderId: "534784156105",
  appId: "1:534784156105:web:2b71f0be0f3498eea48818"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;