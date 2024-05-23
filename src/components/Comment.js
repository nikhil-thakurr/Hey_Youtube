import React from "react";

const Comment = ({ data }) => {
    // console.log(data);
  const { name, text, replies } = data;
  return (
    <div className="flex bg-white-100 rounded-lg shadow-lg ">
      <div className="w-16 h-16 m-2">
        <img
          src="https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
          alt=""
        />
      </div>
      <div className="m-2 p-1">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
