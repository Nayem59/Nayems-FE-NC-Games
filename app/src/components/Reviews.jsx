import { Link } from "react-router-dom";
import { ReviewsContainer } from "./ReviewsContainer.jsx";

export const Reviews = ({ reviews, isLoading, totalCount, setPage, page }) => {
  return (
    <div>
      <Link to="/categories">
        <button>Categories</button>
      </Link>
      <ReviewsContainer
        reviews={reviews}
        isLoading={isLoading}
        totalCount={totalCount}
        setPage={setPage}
        page={page}
      />
    </div>
  );
};
