import { fromJS, Map } from "immutable";
import { arrToMap } from "../utils";
import { ERROR, LOAD_DISHES, START, SUCCESS } from "../constants";

const defaultState = new Map({
  entities: fromJS(arrToMap([])),
  loading: false,
  error: null
});

export default (
  state = defaultState,
  { type, restaurant, response, error }
) => {
  switch (type) {
    case LOAD_DISHES + START:
      return state.set("loading", true);

    case LOAD_DISHES + ERROR:
      return state.set("loading", false).set("error", error);

    case LOAD_DISHES + SUCCESS:
      return state
        .set("loading", false)
        .setIn(["entities", restaurant], fromJS(arrToMap(response)));

    default:
      return state;
  }
};
