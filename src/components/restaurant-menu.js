import React, { useEffect } from "react";
import Dish from "./dish";
import { Row, Col, Skeleton } from "antd";
import { connect } from "react-redux";
import {
  dishesFromRestaurantSelector,
  loadingDishesSelector
} from "./../selectors/index";
import { loadDishes } from "../ac";

function RestaurantMenu({ restaurant, menu, loadDishes, loading }) {
  useEffect(() => {
    loadDishes(restaurant);
  }, []);
  console.log("MENU", menu);
  return (
    <div style={{ padding: "16px" }}>
      <Skeleton loading={loading} active />
      <Row gutter={16}>
        {menu.map(dish => (
          <Col key={dish.get("id")} span={8}>
            <Dish id={dish.get("id")} restaurant={dish.get("restaurant")} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default connect(
  (state, ownState) => ({
    menu: dishesFromRestaurantSelector(state, ownState.restaurant),
    loading: loadingDishesSelector(state)
  }),
  {
    loadDishes
  }
)(RestaurantMenu);
