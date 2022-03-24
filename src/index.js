import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCshGHjnLVnz3yOGWAI0DrB9b5yQsP8ZDs",
  authDomain: "react-chat-161d6.firebaseapp.com",
  projectId: "react-chat-161d6",
  storageBucket: "react-chat-161d6.appspot.com",
  messagingSenderId: "873081856171",
  appId: "1:873081856171:web:be35f49398b201e9f797ee",
  measurementId: "G-5ECZBWF9NW",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{ firestore, auth, firebase }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
