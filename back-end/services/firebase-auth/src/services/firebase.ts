
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATsJV42kmwiZZW6_-2kNvEzDvYGW3S0po",
  authDomain: "cinemagic-fef9f.firebaseapp.com",
  projectId: "cinemagic-fef9f",
  storageBucket: "cinemagic-fef9f.appspot.com",
  messagingSenderId: "495797921735",
  appId: "1:495797921735:web:15a25c67f85a8a630b9be2",
  measurementId: "G-K30TDWS9RG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);