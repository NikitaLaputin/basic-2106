import React, { useEffect } from "react";
import Dish from "./dish";
import { Row, Col, Skeleton } from "antd";
import { connect } from "react-redux";
import { dishesSelector, loadingDishesSelector } from "./../selectors/index";
import { loadDishes } from "../ac";

function RestaurantMenu({ restaurant, menu, loadDishes, loading }) {
  useEffect(() => {
    console.log("HI");
    loadDishes(restaurant);
  }, []);
  console.log("MENU", menu);
  return (
    <div style={{ padding: "16px" }}>
      <Skeleton loading={loading} active />
      <Row gutter={16}>
        {[...menu.keys()].map(id => (
          <Col key={id} span={8}>
            <Dish id={id} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default connect(
  (state, ownProps) => ({
    menu: dishesSelector(state, ownProps.restaurant),
    loading: loadingDishesSelector(state)
  }),
  {
    loadDishes
  }
)(RestaurantMenu);
