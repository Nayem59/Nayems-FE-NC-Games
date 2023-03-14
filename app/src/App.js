import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Login } from "./components/Login.jsx";
import { Reviews } from "./components/Reviews.jsx";
import { SingleReview } from "./components/SingleReview.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        {/* <Route path="/reviews/:review_id/comments" element={<SingleReview />} /> */}
        {/* prep for routes down the line */}
        {/* <Route path="/categories" element={<Categories />} /> */}
        {/* <Route path="/categories/:category" element={<SingleCategory />} /> */}
      </Routes>
    </div>
  );
}

export default App;
