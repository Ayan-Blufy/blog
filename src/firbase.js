
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBzhllEebbbiOE-CXVlfC5lqaOL7qx-7jY",
    authDomain: "prac2-8dcd2.firebaseapp.com",
    projectId: "prac2-8dcd2",
    storageBucket: "prac2-8dcd2.appspot.com",
    messagingSenderId: "673908356895",
    appId: "1:673908356895:web:26fb16e567d6cf9f54222a"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default app;
export { db, storage ,auth, provider };

