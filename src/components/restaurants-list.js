import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { List, Skeleton } from "antd";
import { connect } from "react-redux";
import {
  filtratedRestaurantsSelector,
  loadingRestaurantsSelector
} from "../selectors";
import { loadAllRestaurants } from "../ac";

function RestaurantsList({
  restaurants,
  toggleOpenItem,
  isItemOpen,
  loadAllRestaurants,
  loading
}) {
  useEffect(() => {
    loadAllRestaurants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("---", "rendering restaurant list");
  return (
    <List>
      <Skeleton loading={loading} active />
      {restaurants.map(restaurant => (
        <Restaurant
          key={restaurant.get("id")}
          restaurant={restaurant}
          isOpen={isItemOpen(restaurant.get("id"))}
          onBtnClick={toggleOpenItem(restaurant.get("id"))}
          data-id="restaurant"
        />
      ))}
    </List>
  );
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired
};

export default connect(
  state => {
    console.log("---", "connect");
    return {
      restaurants: filtratedRestaurantsSelector(state),
      loading: loadingRestaurantsSelector(state)
    };
  },
  {
    loadAllRestaurants
  }
)(accordionDecorator(RestaurantsList));
