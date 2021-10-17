import  firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyCdWIN6Ac2JPpemIZnBmM17jXj-6rz4qDc",
    authDomain: "chat-a8427.firebaseapp.com",
    databaseURL: "https://chat-a8427-default-rtdb.firebaseio.com",
    projectId: "chat-a8427",
    storageBucket: "chat-a8427.appspot.com",
    messagingSenderId: "617152221848",
    appId: "1:617152221848:web:cdd691144c64a067a4f6ed"
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }
  else{
      app = firebase.app()
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};