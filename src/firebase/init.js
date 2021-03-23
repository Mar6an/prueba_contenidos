/*
<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAO0QWuXXuZRRgqSY0lRexpNdC4ZtgwQ_Q",
    authDomain: "app-soccer-1-d1fee.firebaseapp.com",
    projectId: "app-soccer-1-d1fee",
    storageBucket: "app-soccer-1-d1fee.appspot.com",
    messagingSenderId: "874415803389",
    appId: "1:874415803389:web:aeb69db4ca971ddeb36794"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAO0QWuXXuZRRgqSY0lRexpNdC4ZtgwQ_Q",
  authDomain: "app-soccer-1-d1fee.firebaseapp.com",
  projectId: "app-soccer-1-d1fee",
  storageBucket: "app-soccer-1-d1fee.appspot.com",
  messagingSenderId: "874415803389",
  appId: "1:874415803389:web:aeb69db4ca971ddeb36794"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInsnapshots: true });
export default firebaseApp.firestore();
