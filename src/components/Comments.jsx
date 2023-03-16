import { useEffect, useState } from "react";
import { getComments, deleteComment } from "../api/api";

export const Comments = ({
  author,
  review_id,
  commentCount,
  setCommentCount,
  reviewComments,
  setReviewComments,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, setIsPending] = useState(false);

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

  const handleDelete = (id) => {
    setIsPending(true);
    deleteComment(id).then(() => {
      setReviewComments((currReviewComments) => {
        const index = currReviewComments.findIndex(
          (comment) => comment.comment_id === id
        );
        const newComments = [...currReviewComments];
        newComments.splice(index, 1);
        return newComments;
      });
      setCommentCount((currCommentCount) => {
        return currCommentCount - 1;
      });
      setIsPending(false);
    });
  };

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
                {author === comment.author && !isPending && (
                  <button
                    type="button"
                    onClick={() => {
                      handleDelete(comment.comment_id);
                    }}
                  >
                    Delete
                  </button>
                )}
                {isPending && (
                  <button type="button" disabled>
                    Deleting...
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
