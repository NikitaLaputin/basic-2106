import { createSelector } from "reselect";

const restaurantsSelector = state => state.restaurants.get("entities");
export const loadingRestaurantsSelector = state =>
  state.restaurants.get("loading");
export const loadingDishesSelector = state => state.dishes.get("loading");
const filtersSelector = state => state.filters;
export const reviewsSelector = state => state.reviews.get("entities");
export const dishesSelector = (state, restaurant) =>
  state.dishes.get("entities").get(restaurant);
export const dishSelector = (state, id, restaurant) => {
  console.log(state, id);
  return state.dishes
    .get("entities")
    .get(restaurant)
    .get(id);
};
export const reviewSelector = (state, id) => state.get(id);

export const totalAmountSelector = state =>
  [...state.order.values()].reduce((acc, amount) => acc + amount, 0);

export const totalPriceSelector = state =>
  [...state.order.entries()].reduce(
    (acc, [id, amount]) => acc + dishSelector(state, id).get("price") * amount,
    0
  );

export const filtratedRestaurantsSelector = createSelector(
  restaurantsSelector,
  filtersSelector,
  reviewsSelector,
  (restaurants, filters, reviews) =>
    [...restaurants.values()].filter(
      restaurant =>
        avarageRateSelector(reviews, { restaurant }) >= filters.get("minRating")
    )
);

export const avarageRateSelector = (state, { restaurant }) => {
  return [...restaurant.get("reviews").values()]
    .map(id => {
      return reviewSelector(state, id).get("rating");
    })
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
};
