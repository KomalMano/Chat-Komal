import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages)

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages

















































// import { doc, onSnapshot } from 'firebase/firestore'
// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { useContext } from 'react'
// import { ChatContext } from '../context/ChatContext'
// import { db } from "../firebase";
// import Message from './Message'

// const Messages = () => {
//   const [chatting, setChatting] = useState([])
//   const {data} = useContext(ChatContext)

//   useEffect(() => {
//     const unSub = onSnapshot(doc(db,"chats", data.chatId), (doc) => {
//       doc.exists() && setChatting(doc.data().chatting)
//     })
//     // clean up
//     return () => {
//       unSub()
//     }
//   },[data.chatId])

//   console.log(chatting)
//   return (
//     <div className='messages'>
//       {/* now use map method to get messages directly */}
//       {chatting.map((m) => (
//         <Message chatting={m} key={m.id} />
//       ))}
//     </div>
//   )
// }

// export default Messages
