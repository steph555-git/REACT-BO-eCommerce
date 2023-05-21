// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0NgvTSuP_pYVIo-ErDNwq_F3E4x2BM0M",
    authDomain: "backoffice-ce409.firebaseapp.com",
    projectId: "backoffice-ce409",
    storageBucket: "backoffice-ce409.appspot.com",
    messagingSenderId: "389347984082",
    appId: "1:389347984082:web:1fae88d75fc7e79a4ce30b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app