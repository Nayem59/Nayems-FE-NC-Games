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
  const [hasCommented, setHasCommented] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReview(review_id).then((review) => {
      setReview(review);
      setVotes(review.votes);
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
        <Votes votes={votes} setVotes={setVotes} review_id={review_id} />
      </div>
      <NewComment
        author={author}
        review_id={review_id}
        setHasCommented={setHasCommented}
      />
      <Comments
        review={review}
        review_id={review_id}
        hasCommented={hasCommented}
      />
      <button onClick={handleBack}>back</button>
    </div>
  );
};
