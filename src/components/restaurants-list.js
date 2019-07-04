import React from "react";
import PropTypes from "prop-types";
import Restaurant from "./restaurant";
import accordionDecorator from "../decorators/accordion";
import { connect } from "react-redux";
import { List } from "antd";

function RestaurantsList(props) {
  const { restaurants, toggleOpenItem, isItemOpen } = props;

  return (
    <List>
      {restaurants.map(restaurant =>
        getDefaultRate(restaurant) >= props.minRating ? (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            isOpen={isItemOpen(restaurant.id)}
            onBtnClick={toggleOpenItem(restaurant.id)}
            data-id="restaurant"
          />
        ) : (
          <React.Fragment key={restaurant.id} />
        )
      )}
    </List>
  );
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.array.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isItemOpen: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  minRating: state.minRating
});

function getDefaultRate(restaurant) {
  return restaurant.reviews
    .map(review => review.rating)
    .filter(rate => typeof rate !== "undefined")
    .reduce((acc, el, _, arr) => acc + el / arr.length, 0);
}

export default connect(mapStateToProps)(accordionDecorator(RestaurantsList));
