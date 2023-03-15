import { useState } from "react";
import { postComments } from "../api/api";

export const NewComment = ({ author, review_id }) => {
  const [text, setText] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handlePostBtn = () => {
    const commentObj = { username: author, body: text };
    setIsPending(true);
    postComments(review_id, commentObj).then(() => {
      console.log("posted comment");
      setText("");
      setIsPending(false);
    });
  };

  console.log("test");

  return (
    <div className="new-comment-container">
      <h3>Add a new Comment: </h3>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="7"
        placeholder="Add a comment..."
        value={text}
        onChange={handleText}
      ></textarea>
      {!isPending && (
        <button type="button" onClick={handlePostBtn}>
          Post
        </button>
      )}
      {isPending && (
        <button type="button" disabled>
          Posting...
        </button>
      )}
    </div>
  );
};