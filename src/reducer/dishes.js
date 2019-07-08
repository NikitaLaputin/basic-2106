import { normalizedDishes } from "../fixtures";
import { getValuesById } from "../utils";

const defaultDishes = getValuesById(normalizedDishes);

export default (dishes = defaultDishes, { type }) => {
  switch (type) {
    default:
      return dishes;
  }
};
