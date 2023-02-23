// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBrJHW3CH1FUr3oT471AOUyyHtlu65Hdo",
  authDomain: "md5-project-9ffec.firebaseapp.com",
  projectId: "md5-project-9ffec",
  storageBucket: "md5-project-9ffec.appspot.com",
  messagingSenderId: "243148945188",
  appId: "1:243148945188:web:921897781f121a829265b1",
  measurementId: "G-BRT6R571SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);