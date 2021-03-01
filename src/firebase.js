import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyAgIVBRphWFSL3BLfPJsoBTS4KyLi4LvHA",
  authDomain: "i-message-9af48.firebaseapp.com",
  databaseURL: "https://i-message-9af48-default-rtdb.firebaseio.com",
  projectId: "i-message-9af48",
  storageBucket: "i-message-9af48.appspot.com",
  messagingSenderId: "554385149886",
  appId: "1:554385149886:web:99518bdf4d0b4ae9cbf3ef"
};
  
 export const APP = firebase.initializeApp(firebaseConfig);
 export const db = APP.database();   
    

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();