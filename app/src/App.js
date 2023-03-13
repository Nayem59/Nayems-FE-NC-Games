import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
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
