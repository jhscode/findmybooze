import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA2ySUdDTflFgiDThE6hnNWiG6AO9e9Png",
    authDomain: "bring-the-booze.firebaseapp.com",
    databaseURL: "https://bring-the-booze.firebaseio.com",
    projectId: "bring-the-booze",
    storageBucket: "",
    messagingSenderId: "885385468013"
  };

  firebase.initializeApp(config);

  export default firebase;