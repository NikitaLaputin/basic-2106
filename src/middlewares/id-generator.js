import { ADD_REVIEW } from "../constants";

const uuid = () =>
  "xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c, r) =>
    (c === "x" ? (r = (Math.random() * 16) | 0) : (r & 0x3) | 0x8).toString(16)
  );

export default store => next => action => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const reviewId = uuid();
      const authorId = uuid();
      payload.userId = authorId;
      payload.id = reviewId;
      next(action);
      break;
    default:
      next(action);
      break;
  }
};
