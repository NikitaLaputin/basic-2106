import { normalizedUsers } from "../fixtures";
import { getValuesById } from "../utils";
import { ADD_REVIEW } from "../constants";

const defaultAuthors = getValuesById(normalizedUsers);

export default (authors = defaultAuthors, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      return {
        ...authors,
        [payload.userId]: {
          id: payload.userId,
          name: payload.name
        }
      };
    default:
      return authors;
  }
};
