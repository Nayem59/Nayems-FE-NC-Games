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

export const getReview = (id) => {
  return beNcGamesApi.get(`/reviews/${id}`).then(({ data }) => {
    return data.review;
  });
};

export const getComments = (id) => {
  return beNcGamesApi.get(`/reviews/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const patchReview = (id, obj) => {
  return beNcGamesApi.patch(`/reviews/${id}`, obj).then(({ data }) => {
    return data.review;
  });
};

export const postComments = (id, obj) => {
  return beNcGamesApi.post(`/reviews/${id}/comments`, obj).then(({ data }) => {
    return data.comments;
  });
};
