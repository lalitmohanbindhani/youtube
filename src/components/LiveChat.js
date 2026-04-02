import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setTimeout(() => {
      //api polling
      console.log("Api polling");
    }, 2000);
    return () => clearTimeout(i);
  }, []);
  return (
    <div className="ml-2 p-2 border border-black w-full h-[450px] bg-slate-100 rounded-lg">
      <ChatMessage name="Lalit Bindhani" message="This is Namaste React" />
    </div>
  );
};

export default LiveChat;
