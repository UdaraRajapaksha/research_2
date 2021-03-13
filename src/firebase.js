import firebase from "firebase";
import "firebase/auth";

  var firebaseConfig = {

    apiKey: "AIzaSyD-ltskaSuyzwkFeSrSiuRvh8hdV8L9RIs",
    authDomain: "opd-assistant.firebaseapp.com",
    databaseURL: "https://opd-assistant.firebaseio.com",
    projectId: "opd-assistant",
    storageBucket: "opd-assistant.appspot.com",
    messagingSenderId: "621721647648",
    appId: "1:621721647648:web:a21b2d4b7c30a1f5401a45"
  };

  // const firebaseConfig = {
  //   apiKey: "AIzaSyDFabXNcQsec1X-16kG2maU3-YBDyb4sk4",
  //   authDomain: "opd-assistant.firebaseapp.com",
  //   databaseURL: "https://opd-assistant.firebaseio.com",
  //   projectId: "opd-assistant",
  //   storageBucket: "opd-assistant.appspot.com",
  //   messagingSenderId: "621721647648",
  //   appId: "1:621721647648:web:8039228169d1a2e1401a45"
  // };
  

// Initialize Firebase
//var fireDb = firebase.initializeApp(firebaseConfig);

//export default fireDb.database().ref();

//export default fireDb;
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// export default firebase.database().ref();
export default firebase.database().ref();

