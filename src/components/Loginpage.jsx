import React, { useState } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, sendSignInLinkToEmail, signInWithRedirect } from "firebase/auth";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Loginpage = () => {


const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const onLogin = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    })
}



 return (

<div>
   <home className ="login">
    <h2>Welcome to the ultimate chat app</h2>

    <form>
        <div>
        <input type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div>
        <input type="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} required />
        </div>
        <button type="submit" onClick={onLogin}>Login</button>


    </form>
    
    
   </home>
</div>
)
}

export default Loginpage;