import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAZ8uWi7Cv7J-0HhPG6kS2LLoiExg8wMnE",
    authDomain: "collegediscussapp.firebaseapp.com",
    projectId: "collegediscussapp",
    storageBucket: "collegediscussapp.appspot.com",
    messagingSenderId: "348372007381",
    appId: "1:348372007381:web:bf1e2184fc5f346b95a55c"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };