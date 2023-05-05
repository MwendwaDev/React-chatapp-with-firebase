
import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import "../components/NavBarstyles.css";
const NavBar = () => {

const[user] = useAuthState(auth);

const userSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
}
const signOut = () => {
    auth.signOut();
}
 return (

<nav className="nav-bar">
    
    
    { user ? ( <button onClick={signOut} className="sign-out" type ="button">Sign Out</button>
    ): (

<button onClick={userSignIn} className="sign-in" type= "button">Sign In</button>
 )
 

}
</nav>
)
}

export default NavBar;