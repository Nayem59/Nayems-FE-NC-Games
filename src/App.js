import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Login } from "./components/Login.jsx";
import { Reviews } from "./components/Reviews.jsx";
import { SingleReview } from "./components/SingleReview.jsx";
import { Categories } from "./components/Categories";
import { useState } from "react";

function App() {
  const [author, setAuthor] = useState("tickle122");
  // const [category, setCategory] = useState("");

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Login author={author} setAuthor={setAuthor} />}
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route
          path="/reviews/:review_id"
          element={<SingleReview author={author} />}
        />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
