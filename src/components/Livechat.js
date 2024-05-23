import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./utils/chatSlice";
import { RandomTextGenerator, generateRandomNames } from "./utils/helper";

const Livechat = () => {
  const dispatch = useDispatch();
  const Chatmessages = useSelector((store) => store.chat.messages);
  const [chatText, setChatText] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: RandomTextGenerator(
            Math.floor(Math.random() * (20 - 5 + 1)) + 5
          ),
        })
      );
    }, 4000);

    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className="ml-1 p-2 border-2 border-black w-auto   h-[600px] rounded-lg bg-slate-100 overflow-scroll flex flex-col-reverse">
        {Chatmessages.map((m, index) => {
          return <ChatMessage key={index} name={m.name} message={m.message} />;
        })}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"Nikhil thakur",
            message:chatText,
          }));
          setChatText("");
        }}
        className="w-full bg-slate-50 border border-black rounded-lg p-2"
      >
        <input
          type="text"
          className="p-2 ml-4 border border-black w-80 rounded-2xl bg-slate-100"
          value={chatText}
          onChange={(e) => setChatText(e.target.value)}
        />
        <button className="p-2 ml-2 bg-red-400 rounded-lg">Send</button>
      </form>
    </div>
  );
};

export default Livechat;
