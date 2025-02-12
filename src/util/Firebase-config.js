// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc08wDiE9VE-FMJwQB8zzb8PL-bpGIuTA",
  authDomain: "shop-9ebad.firebaseapp.com",
  projectId: "shop-9ebad",
  storageBucket: "shop-9ebad.firebasestorage.app",
  messagingSenderId: "804764361675",
  appId: "1:804764361675:web:4cad868477314237ad0c4e",
  measurementId: "G-V1SJ0KJ1BV"
};

// Initialize Firebase
const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig