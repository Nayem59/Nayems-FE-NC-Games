import axios from "axios";

const beNcGamesApi = axios.create({
  baseURL: "https://nayems-be-nc-games.onrender.com/api",
});

export const getReviews = (p) => {
  return beNcGamesApi
    .get("/reviews", {
      params: { p: p },
    })
    .then(({ data }) => {
      return data;
    });
};
