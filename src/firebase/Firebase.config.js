// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxuWRj_xIJlVHXd4GUXroevgHN5QSGFLM",
  authDomain: "dragon-news-auth.firebaseapp.com",
  projectId: "dragon-news-auth",
  storageBucket: "dragon-news-auth.appspot.com",
  messagingSenderId: "278918531386",
  appId: "1:278918531386:web:41d76bfd4823294cae2803"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;