import { initializeApp } from 'firebase/app'
// authentication
import { getAuth } from 'firebase/auth'
// storage bucket
import { getStorage } from 'firebase/storage'
// firestore
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBTnBumzvUfamX7M08W0X6gAZkecAGkWio",
    authDomain: "react-chat-app-de158.firebaseapp.com",
    databaseURL: "https://react-chat-app-de158-default-rtdb.firebaseio.com",
    projectId: "react-chat-app-de158",
    storageBucket: "react-chat-app-de158.appspot.com",
    messagingSenderId: "6830262814",
    appId: "1:6830262814:web:bce49f672e3cc63ba27c0f",
    measurementId: "G-EBF7YE52LN"
};

// firebase instance
export const app = initializeApp(firebaseConfig)
// auth instance
export const auth = getAuth()
// storage
export const store = getStorage()
// firestore
export const db = getFirestore()