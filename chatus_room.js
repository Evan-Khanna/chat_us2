var firebaseConfig = {
    apiKey: "AIzaSyC5R3NfaBDFv-CLYHSwEFmcawgVP8KpWUw",
    authDomain: "chat-us-88986.firebaseapp.com",
    databaseURL: "https://chat-us-88986-default-rtdb.firebaseio.com",
    projectId: "chat-us-88986",
    storageBucket: "chat-us-88986.appspot.com",
    messagingSenderId: "488463718278",
    appId: "1:488463718278:web:3e9f1a414129ad48f67e07"
  };
  firebase.initializeApp(firebaseConfig);
  
  function logout(){
  window.location="chatus.html";
  }