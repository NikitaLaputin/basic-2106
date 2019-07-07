import { normalizedReviews } from "../fixtures";
import { getValuesById } from "../utils";

const defaultReviews = getValuesById(normalizedReviews);

export default (reviews = defaultReviews, { type }) => {
  switch (type) {
    default:
      return reviews;
  }
};
