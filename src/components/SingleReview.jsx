import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { getReview } from "../api/api";
import { Comments } from "./Comments.jsx";
import { NewComment } from "./NewComment.jsx";
import { Votes } from "./Votes.jsx";

export const SingleReview = ({ author }) => {
  const navigate = useNavigate();
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [votes, setVotes] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [reviewComments, setReviewComments] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getReview(review_id)
      .then((review) => {
        setReview(review);
        setVotes(review.votes);
        setCommentCount(+review.comment_count);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err.response.data.msg);
        setIsLoading(false);
      });
  }, [review_id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (err) {
    return <h2>{err}</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="single-review-container">
      <div className="main-review">
        <h2 className="review-title">{review.title}</h2>
        <p>owner: {review.owner}</p>
        <p>category: {review.category}</p>
        <p>designer: {review.designer}</p>
        <img
          className="img-review"
          src={review.review_img_url}
          alt={review.title}
        />
        <p className="review-body">Review: {review.review_body}</p>
        <Votes votes={votes} setVotes={setVotes} review_id={review_id} />
      </div>
      <NewComment
        author={author}
        review_id={review_id}
        setReviewComments={setReviewComments}
        setCommentCount={setCommentCount}
      />
      <Comments
        author={author}
        review={review}
        review_id={review_id}
        commentCount={commentCount}
        setCommentCount={setCommentCount}
        reviewComments={reviewComments}
        setReviewComments={setReviewComments}
      />
      <button onClick={handleBack}>back</button>
    </div>
  );
};
