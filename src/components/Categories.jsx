import { useEffect, useState } from "react";
import { getCategories } from "../api/api";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((categoriesData) => {
      setCategories(categoriesData);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (e) => {
    // setCategory(e.target.textContent);
    navigate(`/categories/${e.target.textContent}`);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Here are all the categories:</h2>
      {categories.map((category) => {
        return (
          <div key={category.slug} className="category-container">
            <p>Description: {category.description}</p>
            <button type="button" onClick={handleClick}>
              {category.slug}
            </button>
          </div>
        );
      })}
    </div>
  );
};
