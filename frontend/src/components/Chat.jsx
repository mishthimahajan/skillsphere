// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:5000");

// export default function Chat() {
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   const name = localStorage.getItem("name") || "User";

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setChat((prev) => [...prev, data]);
//     });

//     return () => socket.off("receive_message");
//   }, []);

//   const sendMessage = () => {
//     if (!message.trim()) return;

//     const msgData = {
//       text: message,
//       sender: name,
//       time: new Date().toLocaleTimeString(),
//     };

//     socket.emit("send_message", msgData);
//     setChat((prev) => [...prev, msgData]);
//     setMessage("");
//   };

//   return (
//     <div className="bg-white/20 p-5 rounded-xl h-87.5 flex flex-col">

//       {/* CHAT AREA */}
//       <div className="flex-1 overflow-y-auto space-y-2 mb-3">

//         {chat.map((msg, i) => (
//           <div
//             key={i}
//             className={`flex ${
//               msg.sender === name ? "justify-end" : "justify-start"
//             }`}
//           >

//             <div
//               className={`px-4 py-2 rounded-xl max-w-[70%] ${
//                 msg.sender === name
//                   ? "bg-green-400 text-black"
//                   : "bg-white text-black"
//               }`}
//             >
//               <p className="text-xs font-bold">{msg.sender}</p>
//               <p>{msg.text}</p>
//               <p className="text-[10px] text-right">{msg.time}</p>
//             </div>

//           </div>
//         ))}

//       </div>

//       {/* INPUT */}
//       <div className="flex gap-2">
//         <input
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type message..."
//           className="flex-1 p-2 rounded text-black"
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-blue-500 px-4 rounded"
//         >
//           Send
//         </button>
//       </div>

//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const username = localStorage.getItem("name") || "Client";
  const room = "job_room_1"; // same for both users

  useEffect(() => {
    socket.emit("join_room", room);

    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  const sendMessage = async () => {
  if (message !== "") {
    const msgData = {
      room,
      author: name,
      message,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit("send_message", msgData);

    // ✅ ONLY ADD ONCE HERE
    setChat((list) => [...list, msgData]);
    setMessage("");
  }
};

// ✅ RECEIVE MESSAGE
useEffect(() => {

  socket.on("receive_message", (data) => {
  setMessages((prev) => {
    // prevent duplicate
    if (prev.find((m) => m.message === data.message)) {
      return prev;
    }
    return [...prev, data];
  });
});
  // socket.on("receive_message", (data) => {
  //   setChat((list) => [...list, data]);
  // });

  return () => socket.off("receive_message"); // 🔥 VERY IMPORTANT (prevents duplicate listeners)
}, []);

  return (
    <div className="flex flex-col h-[80vh] bg-white/10 rounded-xl p-4">

      {/* CHAT MESSAGES */}
      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {chat.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs ${
              msg.author === username
                ? "bg-green-500 ml-auto text-right"
                : "bg-gray-700"
            }`}
          >
            <p className="text-sm">{msg.author}</p>
            <p>{msg.message}</p>
            <p className="text-xs">{msg.time}</p>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 rounded bg-white/20 outline-none"
          placeholder="Type message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendMessage}
          className="bg-green-500 px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}