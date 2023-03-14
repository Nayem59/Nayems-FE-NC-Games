import { useState } from "react";

export const NewComment = () => {
  const [text, setText] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddBtn = () => {
    setNewComment(text);
    setText("");
  };

  console.log(newComment);

  return (
    <div className="new-comment-container">
      <h3>Add a new Comment: </h3>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="10"
        placeholder="Add a comment..."
        value={text}
        onChange={handleText}
      ></textarea>
      <button type="button" onClick={handleAddBtn}>
        Add
      </button>
    </div>
  );
};
