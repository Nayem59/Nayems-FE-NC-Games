import { Link, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReviews } from "../api/api";

export const Reviews = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [reviews, setReviews] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  const sortByQuery = searchParams.get("sort_by") || undefined;
  const orderByQuery = searchParams.get("order") || undefined;

  useEffect(() => {
    setIsLoading(true);
    getReviews(page, category, sortByQuery, orderByQuery).then((data) => {
      setReviews(data.reviews);
      setTotalCount(data.total_count);
      setMaxPage(Math.ceil(data.total_count / 10));
      setIsLoading(false);
    });
  }, [page, category, sortByQuery, orderByQuery]);

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
      <nav>
        <Link to="/">back to login</Link>
      </nav>
      <Link to="/categories">
        <button>Categories</button>
      </Link>
      <div id="all-reviews-container">
        <h2>
          Here are all the {totalCount} Reviews
          {category ? ` categorised by ${category}` : ""}:
        </h2>
        <p>sort by:</p>
        <select
          value={sortByQuery}
          onChange={(e) => {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set("sort_by", e.target.value);
            setSearchParams(newSearchParams);
          }}
        >
          <option value="created_at">date</option>
          <option value="comment_count">number of comments</option>
          <option value="votes">votes</option>
        </select>
        <div>
          <input
            name="asc-desc"
            type="radio"
            id="asc"
            value={orderByQuery}
            onChange={(e) => {
              const newSearchParams = new URLSearchParams(searchParams);
              newSearchParams.set("order", "asc");
              setSearchParams(newSearchParams);
            }}
            checked={orderByQuery === "asc"}
          />
          <label htmlFor="asc">ascending</label>
          <input
            name="asc-desc"
            type="radio"
            id="desc"
            value={orderByQuery}
            onChange={(e) => {
              const newSearchParams = new URLSearchParams(searchParams);
              newSearchParams.set("order", "desc");
              setSearchParams(newSearchParams);
            }}
            checked={orderByQuery === "desc"}
          />
          <label htmlFor="desc">descending</label>
        </div>
        {category ? <Link to="/reviews">back to all Reviews</Link> : null}
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
