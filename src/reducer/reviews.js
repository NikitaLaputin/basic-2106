import { fromJS, Map } from "immutable";
import { arrToMap } from "../utils";
import {
  ADD_REVIEW,
  ERROR,
  LOAD_ALL_REVIEWS,
  START,
  SUCCESS
} from "../constants";

const defaultState = new Map({
  entities: fromJS(arrToMap([])),
  loading: false,
  error: null
});

export default (
  state = defaultState,
  { type, payload, id, response, error }
) => {
  switch (type) {
    case ADD_REVIEW:
      return state.update("entities", reviews =>
        reviews.push(new Map({ id, payload }))
      );

    case LOAD_ALL_REVIEWS + START:
      return state.set("loading", true);

    case LOAD_ALL_REVIEWS + ERROR:
      return state.set("loading", false).set("error", error);

    case LOAD_ALL_REVIEWS + SUCCESS:
      return state
        .set("loading", false)
        .set("entities", fromJS(arrToMap(response)));

    default:
      return state;
  }
};
