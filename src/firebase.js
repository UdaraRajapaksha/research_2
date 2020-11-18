import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyAdO5NGiZ4VnO7JUuUJAdDU-IuqwtG7NVA",
    authDomain: "patient-network-d3b05.firebaseapp.com",
    databaseURL: "https://patient-network-d3b05.firebaseio.com",
    projectId: "patient-network-d3b05",
    storageBucket: "patient-network-d3b05.appspot.com",
    messagingSenderId: "500077093633",
    appId: "1:500077093633:web:e52eb436fd94c8675af100"
  };

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();