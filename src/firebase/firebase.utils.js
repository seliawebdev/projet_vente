import firebase from 'firebase/app'

import 'firebase/firestore'

import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAGD-9mxP-WUbAQAZSG0Gb4ULM6WA0b7ko",
    authDomain: "projet-vente-8af61.firebaseapp.com",
    databaseURL: "https://projet-vente-8af61.firebaseio.com",
    projectId: "projet-vente-8af61",
    storageBucket: "projet-vente-8af61.appspot.com",
    messagingSenderId: "845732131855",
    appId: "1:845732131855:web:6fd3ca82fa151894b29f7a",
    measurementId: "G-W6TPZXWQN1"
  };


firebase.initializeApp(config)



export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })

export const loginAvecGoogle = () => auth.signInWithPopup(provider)



export default firebase
