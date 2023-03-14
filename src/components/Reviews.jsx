import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviews } from "../api/api";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getReviews(page).then((data) => {
      setReviews(data.reviews);
      setTotalCount(data.total_count);
      setMaxPage(Math.ceil(data.total_count / 10));
      setIsLoading(false);
    });
  }, [page]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const handleNext = () => {
    setPage((currPage) => {
      return currPage + 1;
    });
  };

  const handlePrev = () => {
    setPage((currPage) => {
      return currPage - 1;
    });
  };

  return (
    <div>
      <Link to="/categories">
        <button>Categories</button>
      </Link>
      <div id="all-reviews-container">
        <h2>Here are all the {totalCount} Reviews:</h2>
        <button>sort</button>
        <div>
          {reviews.map((review) => {
            return (
              <div className="review-card" key={review.review_id}>
                <Link to={`/reviews/${review.review_id}`}>
                  <p>owner: {review.owner}</p>
                  <p>title: {review.title}</p>
                  <p>category: {review.category}</p>
                  <p>votes: {review.votes}</p>
                  <p>designer: {review.designer}</p>
                  <p>comment count: {review.comment_count}</p>
                  <img
                    className="img-reviews"
                    src={review.review_img_url}
                    alt={review.title}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="pagination">
          {page === 1 ? (
            <></>
          ) : (
            <button type="button" onClick={handlePrev}>
              prev
            </button>
          )}
          {page === maxPage ? (
            <></>
          ) : (
            <button type="button" onClick={handleNext}>
              next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
