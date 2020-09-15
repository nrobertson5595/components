import React from "react";
import faker from "faker";

const Comment = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.pic} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.post}</div>
      </div>
    </div>
  );
};
export default Comment;
