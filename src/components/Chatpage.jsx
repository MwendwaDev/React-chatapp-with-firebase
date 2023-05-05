import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import './NavBar';
import '../components/Chatpagestyles.css'

const ChatPage = () => {
    const [chats, setChats] = useState("");



const chatPage = async (event) => {
    event.preventDefault();
    if (chats.trim() === "") {
    alert("input valid chat please");
    return;
}

let { uid, displayName, photoURL } = auth.currentUser;
await addDoc(collection(db, "messages"),
{
    text: chats,
    name: displayName,
    avatar: photoURL,
    createdAt: serverTimestamp(), uid,
});

setChats("");
}
    return (

        <div className="chatmessage">

            <form onSubmit={(event) => chatPage(event)} className="sendmessage">
                <label htmlFor="messageInput" hidden> Input your message here</label>
                <input
                    id="messageInput"
                    name="messageInput"
                    text="text"
                    className="form-input_input"
                    placeholder="type message..." 
                    value={chats} onChange={(e) => setChats(e.target.value)}/>
                <button type="submit">Submit Message</button>    

                

            </form>
      
        </div>
    )
    };



export default ChatPage;
