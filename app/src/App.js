import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Login } from "./components/Login.jsx";
import { Reviews } from "./components/Reviews.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reviews" element={<Reviews />} />
        {/* prep for routes down the line */}
        {/* <Route path="/reviews/:review_id" element={<SingleReview />} /> */}
        {/* <Route path="/categories" element={<Categories />} /> */}
        {/* <Route path="/categories/:category" element={<SingleCategory />} /> */}
      </Routes>
    </div>
  );
}

export default App;
