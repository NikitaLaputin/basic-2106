import { ADD_ITEM, REMOVE_ITEM } from "../constants";
import { Map } from "immutable";

export default (order = new Map(), action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      return order.set(payload.id, (order.get(payload.id) || 0) + 1);

    case REMOVE_ITEM:
      return order.set(payload.id, Math.max(order.get(payload.id) || 0) - 1, 0);

    default:
      return order;
  }
};
