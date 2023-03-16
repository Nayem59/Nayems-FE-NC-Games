import { useState } from "react";
import { postComments } from "../api/api";

export const NewComment = ({
  author,
  review_id,
  setReviewComments, // <---
  setCommentCount, // <---
}) => {
  // ^ setHasCommented
  const [text, setText] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handlePostBtn = () => {
    const commentObj = { username: author, body: text };
    setIsPending(true);
    if (text) {
      postComments(review_id, commentObj).then((comment) => {
        console.log("posted comment");
        setText("");
        //
        setReviewComments((currReviewComments) => {
          return [comment, ...currReviewComments];
        });
        //
        setCommentCount((currCommentCount) => {
          return currCommentCount + 1;
        });
        // setHasCommented((currHasCommented) => {
        //   return currHasCommented ? false : true;
        // });
        setIsPending(false);
      });
    } else {
      setIsPending(false);
    }
  };

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
