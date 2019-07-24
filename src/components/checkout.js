import React from "react";
import { connect } from "react-redux";
import { orderListSelector } from "../selectors";
import { Button, List } from "antd";
import CartItem from "./cart-item";
import { withLocale } from "./wrappers/locale-wrapper";

function Checkout({ orderList, dictionary, locale }) {
  debugger;
  return (
    <div>
      <List
        dataSource={orderList}
        renderItem={cartItem => <CartItem item={cartItem} />}
      />
      <Button type="primary">{dictionary[locale].order}</Button>
    </div>
  );
}

Checkout.propTypes = {};

export default connect(state => ({
  orderList: orderListSelector(state)
}))(withLocale(Checkout));
