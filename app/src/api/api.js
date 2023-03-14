import axios from "axios";

const beNcGamesApi = axios.create({
  baseURL: "https://nayems-be-nc-games.onrender.com/api",
});

export const getReviews = (page) => {
  return beNcGamesApi
    .get("/reviews", {
      params: { p: page },
    })
    .then(({ data }) => {
      return data;
    });
};
