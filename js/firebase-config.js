
var config = {
    apiKey: "AIzaSyA3uKbxPyeGSxpDOUH6bkS_L8wFgdEqrLw",
    authDomain: "trigonic-a4354.firebaseapp.com",
    databaseURL: "https://trigonic-a4354.firebaseio.com",
    projectId: "trigonic-a4354",
    storageBucket: "trigonic-a4354.appspot.com",
    messagingSenderId: "403029019752"
  };
  firebase.initializeApp(config);

  const trigonic_DB = firebase.firestore();

  const settings = {timestampsInSnapshots: true};
  trigonic_DB.settings(settings);
