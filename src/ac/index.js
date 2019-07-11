import {
  ADD_ITEM,
  ADD_REVIEW,
  DECREMENT,
  ERROR,
  INCREMENT,
  LOAD_ALL_RESTAURANTS,
  REMOVE_ITEM,
  SET_MIN_RATING,
  START,
  SUCCESS,
  LOAD_ALL_REVIEWS,
  LOAD_DISHES,
  LOAD_ALL_USERS
} from "../constants";

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const addItem = id => ({
  type: ADD_ITEM,
  payload: { id }
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  payload: { id }
});

export const setMinRating = minRating => ({
  type: SET_MIN_RATING,
  payload: { minRating }
});

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: true
});

/*
export const loadAllRestaurants = () => ({
  type: LOAD_ALL_RESTAURANTS,
  callAPI: "/api/restaurants"
});
*/

export const loadAllRestaurants = () => async dispatch => {
  try {
    dispatch({ type: LOAD_ALL_RESTAURANTS + START });

    const rawRes = await fetch("/api/restaurants");
    const response = await rawRes.json();
    await dispatch(loadAllReiews());

    dispatch({ type: LOAD_ALL_RESTAURANTS + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_ALL_RESTAURANTS + ERROR, error });
  }
};
export const loadAllReiews = () => async dispatch => {
  try {
    dispatch({ type: LOAD_ALL_REVIEWS + START });

    const rawRes = await fetch("/api/reviews");
    const response = await rawRes.json();

    dispatch({ type: LOAD_ALL_REVIEWS + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_ALL_REVIEWS + ERROR, error });
  }
};

export const loadDishes = restaurant => async dispatch => {
  try {
    dispatch({ type: LOAD_DISHES + START });

    const rawRes = await fetch(`/api/dishes?id=${restaurant}`);
    const response = await rawRes.json();

    dispatch({ type: LOAD_DISHES + SUCCESS, response, restaurant });
  } catch (error) {
    dispatch({ type: LOAD_DISHES + ERROR, error });
  }
};

export const loadAllUsers = () => async dispatch => {
  try {
    dispatch({ type: LOAD_ALL_USERS + START });

    const rawRes = await fetch("/api/users");
    const response = await rawRes.json();

    dispatch({ type: LOAD_ALL_USERS + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_ALL_USERS + ERROR, error });
  }
};
