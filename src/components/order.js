import React from "react";
import { Row, Col } from "antd";
import Dish from "./dish";
import { connect } from "react-redux";
import { orderSelector, totalAmountSelector } from "../selectors";
import OrderForm from "./order-form";
import { NavLink } from "react-router-dom";

function OrderDishes({ order, amount }) {
  console.log("ORDER", order);
  const body = amount ? (
    order.map(dish => (
      <Col key={dish.id} span={8}>
        <NavLink to={`/restaurants/${dish.restaurant}`}>
          <Dish id={dish.id} />
        </NavLink>
      </Col>
    ))
  ) : (
    <div>Your cart is empty</div>
  );
  return (
    <>
      <h2>Your cart:</h2>
      <Row gutter={16}>{body}</Row>
      <OrderForm />
    </>
  );
}

export default connect(state => ({
  order: orderSelector(state),
  amount: totalAmountSelector(state)
}))(OrderDishes);
