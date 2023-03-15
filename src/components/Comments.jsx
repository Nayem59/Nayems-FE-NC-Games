import { useEffect, useState } from "react";
import { getComments } from "../api/api";

export const Comments = ({ review, review_id }) => {
  const [reviewComments, setReviewComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((comments) => {
      setReviewComments(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="comments-container">
      <h3>{review.comment_count} comments:</h3>
      <ul>
        {reviewComments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>Author: {comment.author}</p>
              <p>{comment.body}</p>
              <p>Comment made on: {comment.created_at}</p>
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
