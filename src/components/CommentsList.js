import React from "react";
import Comment from "./Comment";

const CommentsList = ({ commentData }) => {
  return commentData.map((comments, index) => (
    <div key={index} >
      <Comment data={comments} />
      <div className="pl-4 border border-l-black">
        <CommentsList commentData={comments.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
