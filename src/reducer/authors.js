import { normalizedUsers } from "../fixtures";
import { getValuesById } from "../utils";

const defaultAuthors = getValuesById(normalizedUsers);

export default (authors = defaultAuthors, { type }) => {
  switch (type) {
    default:
      return authors;
  }
};
