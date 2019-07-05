export function getAverageRate(restaurant) {
  return restaurant.reviews
    .map(review => review.rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
}

export const getValuesById = ids =>
  ids.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item
    }),
    {}
  );
