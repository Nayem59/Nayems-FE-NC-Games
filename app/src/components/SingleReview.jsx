import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getReview } from "../api/api";
// import { Comments } from "./Comments.jsx";

export const SingleReview = () => {
  const navigate = useNavigate();
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReview(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  const handleBack = () => {
    navigate(-1);
  };

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
        <div className="votes-container">
          <h3>Votes: {review.votes}</h3>
          <button>Vote</button>
        </div>
        <button onClick={handleBack}>back</button>
      </div>
      {/* <Comments review={review} review_id={review_id} /> */}
    </div>
  );
};
