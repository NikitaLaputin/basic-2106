import React from "react";
import { connect } from "react-redux";
import { orderListSelector } from "../selectors";
import { Button, List } from "antd";
import CartItem from "./cart-item";
import { LocaleConsumer } from "../contexts/locale";

function Checkout({ orderList }) {
  debugger;
  return (
    <LocaleConsumer>
      {({ locale, dictionary }) => (
        <div>
          <List
            dataSource={orderList}
            renderItem={cartItem => <CartItem item={cartItem} />}
          />
          <Button type="primary">{dictionary[locale].order}</Button>
        </div>
      )}
    </LocaleConsumer>
  );
}

Checkout.propTypes = {};

export default connect(state => ({
  orderList: orderListSelector(state)
}))(Checkout);
