import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBSwqKz4kxuNt0wHteTO3P1fgu101J2ONc",
  authDomain: "test-7d665.firebaseapp.com",
  projectId: "test-7d665",
  storageBucket: "test-7d665.appspot.com",
  messagingSenderId: "118584342665",
  appId: "1:118584342665:web:968432b8d68cb1f94c6e58",
  measurementId: "G-V087YFG5S8"
}
// const firebaseConfig = {
//   apiKey: "AIzaSyCMd0tstqifiqRx_fFpXhx3EZx1LBk4dpU",
//   authDomain: "opd-assistant.firebaseapp.com",
//   databaseURL: "https://opd-assistant.firebaseio.com",
//   projectId: "opd-assistant",
//   storageBucket: "opd-assistant.appspot.com",
//   messagingSenderId: "621721647648",
//   appId: "1:621721647648:web:47a17e8630da5b6a401a45"
// };
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb;

// export default fireDb.database().ref();
