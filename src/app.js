import React from "react";
import RestaurantsList from "./components/restaurants-list";
import { restaurants } from "./fixtures";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import PropTypes from "prop-types";

export default function App() {
  return (
    <div>
      <h1>Delivery App</h1>
      <RestaurantsList restaurants={restaurants} />
      <OrderForm />
    </div>
  );
}

App.propTypes = {
  restaurants: PropTypes.array
};
