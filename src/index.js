import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment
          author="Sam"
          date="today"
          post="Hello this is the post"
          pic={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Nick"
          date="yesterday"
          post="Hello this is the post"
          pic={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author="Sam"
          date="yesterday"
          post="Hello this is the post"
          pic={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
