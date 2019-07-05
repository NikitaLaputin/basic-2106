import { normalizedReviews } from "../fixtures";
import { getValuesById } from "../utils";
import { authorSelector } from "../selectors";

const defaultReviews = normalizedReviews.reduce(
  (acc, item) => ({
    ...acc,
    [item.id]: item
  }),
  {}
);

export default (reviews = defaultReviews, { type }) => {
  switch (type) {
    default:
      return reviews;
  }
};
