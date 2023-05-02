
import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
//import "./NavBarstyles.css";
const NavBar = () => {

const[user] = useAuthState(auth);

const userSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
}
const userSignOut = () => {
    auth.userSignOut
}
 return (

<nav className="nav-bar">
    
    {!user ? ( <button onClick={userSignIn} className="sign-in" type ="button">Sign In</button>
    ): (

<button onClick={userSignOut} className="sign-out" type= "button">Sign Out</button>
 )
 

}
</nav>
)
}

export default NavBar;