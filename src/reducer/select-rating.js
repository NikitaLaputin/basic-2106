import { SELECT_RATING } from "../constants";

export default (minRating = 1, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_RATING:
      return payload.minRating;
    default:
      return minRating;
  }
};
