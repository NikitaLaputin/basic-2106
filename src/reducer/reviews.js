import { normalizedReviews } from "../fixtures";
import { getValuesById } from "../utils";
import { ADD_REVIEW } from "../constants";

const defaultReviews = getValuesById(normalizedReviews);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...reviews,
        [payload.id]: {
          id: payload.id,
          userId: payload.userId,
          text: payload.text,
          rating: payload.rating
        }
      };
    default:
      return reviews;
  }
};
