// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';   

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-3E2T-wYdZ0l-jNR7DVyQkbuGlt34K9E",
  authDomain: "positivaerp.firebaseapp.com",
  projectId: "positivaerp",
  storageBucket: "positivaerp.appspot.com",
  messagingSenderId: "850832852167",
  appId: "1:850832852167:web:242c0d2e9bcf756cb2aae2",
  measurementId: "G-JBJM4Y932T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export { auth };