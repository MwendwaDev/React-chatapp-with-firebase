import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import NavBar from "./components/NavBar";
import { auth } from "./firebase";
import {useAuthState } from "react-firebase-hooks/auth";
import Loginpage from "./components/Loginpage";
import Chatpage from "./components/Chatpage";






function App() {
const [user] = useAuthState(auth);


  return (
    <>
    <NavBar />
    
    {!user ? <Chatpage /> : <Loginpage />
}
    
      
    
    </>
  )
}

export default App
