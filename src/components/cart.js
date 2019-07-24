import React from "react";
import { connect } from "react-redux";
import { totalAmountSelector, totalPriceSelector } from "../selectors";
import { withLocale } from "./wrappers/locale-wrapper";

function Cart({ totalAmount, totalPrice, locale, dictionary }) {
  return (
    <div>
      {`${dictionary[locale].total} ${totalAmount} ${
        dictionary[locale].items
      } ${totalPrice}$`}
    </div>
  );
}

export default connect(state => ({
  totalAmount: totalAmountSelector(state),
  totalPrice: totalPriceSelector(state)
}))(withLocale(Cart));
