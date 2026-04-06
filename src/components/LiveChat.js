import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //api polling

      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: makeRandomMessage(20) + " 🚀",
        }),
      );
    }, 500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[450px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((msg, i) => (
            <ChatMessage key={i} name={msg.name} message={msg.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On form Submit " + liveMessage);
          dispatch(
            addMessage({
              name: "Lalit",
              message: liveMessage,
            }),
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[360px]"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
