import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAJ2vd0RON95deiTECQHx4ti7lx3VUfu5Y",
    authDomain: "task-5bc49.firebaseapp.com",
    databaseURL: "https://task-5bc49-default-rtdb.firebaseio.com",
    projectId: "task-5bc49",
    storageBucket: "task-5bc49.appspot.com",
    messagingSenderId: "627079694045",
    appId: "1:627079694045:web:18891894829647c8927d34"
  };
  
 export const APP = firebase.initializeApp(firebaseConfig);
 export const db = APP.database();   
    

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();