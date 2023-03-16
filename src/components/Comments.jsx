import { useEffect, useState } from "react";
import { getComments } from "../api/api";

export const Comments = ({
  review,
  review_id,
  commentCount, // <---
  reviewComments, // <---
  setReviewComments, // <---
}) => {
  // const [reviewComments, setReviewComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((comments) => {
      setReviewComments(comments);
      setIsLoading(false);
    });
  }, [review_id, setReviewComments]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="comments-container">
      <h3>{commentCount} comments:</h3>
      <ul>
        {reviewComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>Author: {comment.author}</p>
              <p>{comment.body}</p>
              <p>
                Comment made on: {new Date(comment.created_at).toDateString()}
              </p>
              <div className="votes-container">
                <h3>Votes: {comment.votes}</h3>
                <button>Vote</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
