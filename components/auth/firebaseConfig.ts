import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAnx1YAPwMXdM2uCPCFV9X9UqQ73WbBvuE",
    authDomain: "rn-firebase-7429e.firebaseapp.com",
    projectId: "rn-firebase-7429e",
    storageBucket: "rn-firebase-7429e.appspot.com",
    messagingSenderId: "846327454317",
    appId: "1:846327454317:web:766235bc2c8ab8eb533d64",
    measurementId: "G-MLTRW8JK9L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
