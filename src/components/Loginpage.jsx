import React, { useState } from "react";
import '../components/Loginpagestyles.css';
import '../components/NavBar'
import { auth } from "../firebase";
import { sendSignInLinkToEmail, signInWithRedirect } from "firebase/auth";
import { GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';

const Loginpage = () => {


const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const signOut = () => {
     auth.signOut();
}


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
   

    <form className="form">
        

        <div className="logincontainer"> 
        <p>Mwendwa Chat App</p>
        <p> Create Account with email & password to login</p>
            
              { !createUserWithEmailAndPassword ? (<button onClick={signOut} className="sign-out" type ="button">Sign Out
               </button>) : (
   
        <div className="input-container">
            
            <input type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)} required />
        
            <input type="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} required />
        
            <button type="submit" onClick={onLogin}>Login</button>
        </div>)
       }
       
       
        </div> 
</form> 
       
        
        

        


    
    
    
   </home>
</div>
)
}

export default Loginpage;