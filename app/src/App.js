import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Login } from "./components/Login.jsx";
import { Reviews } from "./components/Reviews.jsx";
import { useEffect, useState } from "react";
import { getReviews } from "./api/api";

function App() {
  const [reviews, setReviews] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  console.log(reviews);

  useEffect(() => {
    setIsLoading(true);
    getReviews(page).then((data) => {
      setReviews(data.reviews);
      setTotalCount(data.total_count);
      setIsLoading(false);
    });
  }, [page]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/reviews"
          element={
            <Reviews
              reviews={reviews}
              isLoading={isLoading}
              totalCount={totalCount}
              setPage={setPage}
              page={page}
            />
          }
        />
        {/* prep for routes down the line */}
        {/* <Route path="/reviews/:review_id" element={<SingleReview />} /> */}
        {/* <Route path="/categories" element={<Categories />} /> */}
        {/* <Route path="/categories/:category" element={<SingleCategory />} /> */}
      </Routes>
    </div>
  );
}

export default App;
