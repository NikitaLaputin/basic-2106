import { normalizedRestaurants } from "../fixtures";
import { getValuesById } from "../utils";
import { ADD_REVIEW } from "../constants";

const defaultRestaurants = getValuesById(normalizedRestaurants);

export default (state = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...state,
        [payload.restaurant]: Object.assign(state[payload.restaurant], {
          reviews: [...state[payload.restaurant].reviews, payload.id]
        })
      };
    default:
      return state;
  }
};
