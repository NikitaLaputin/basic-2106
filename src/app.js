import React from "react";
import RestaurantsList from "./components/restaurants-list";
import { restaurants } from "./fixtures";
import "antd/dist/antd.css";
import OrderForm from "./components/order-form";
import Cart from "./components/cart";
import RatingSelector from "./components/rating-selector";

export default function App() {
  return (
    <div>
      <h1>Delivery App</h1>
      <span style={{ margin: 20, fontSize: 15 }}>
        Select minimal desirable rating:
      </span>
      <RatingSelector />
      <RestaurantsList restaurants={restaurants} />
      <OrderForm />
      <Cart />
    </div>
  );
}
