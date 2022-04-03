import React, { useState } from 'react'
import { db, auth, provider } from '../firbase';
import {
    signInWithPopup, onAuthStateChanged,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


const LogIn = ({ setisauth}) => {


   const history = useNavigate();
    const [user, setuser] = useState('');


    const siginWithGoogle = async () => {

        await signInWithPopup(auth, provider);
        setisauth(true);
        localStorage.setItem("isauth", true);
        history("/");
        
    }
    onAuthStateChanged(auth, (curruser) => {
        setuser(curruser);
        
    })



    return (
        <div className="loginPage">
            <p>Sign In With Google to Continue</p>
            <button className="login-with-google-btn" onClick={siginWithGoogle}>
                Sign in with Google
            </button>
        </div>
    )
}

export default LogIn
