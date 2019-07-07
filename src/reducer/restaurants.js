import { normalizedRestaurants } from "../fixtures";
import { getValuesById } from "../utils";

const defaultRestaurants = getValuesById(normalizedRestaurants);

export default (state = defaultRestaurants, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
