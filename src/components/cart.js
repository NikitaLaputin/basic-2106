import React from "react";
import { connect } from "react-redux";
import { totalAmountSelector, totalPriceSelector } from "../selectors";
import { LocaleConsumer } from "../contexts/locale";

function Cart({ totalAmount, totalPrice }) {
  return (
    <LocaleConsumer>
      {({ locale, dictionary }) => (
        <div>
          {`${dictionary[locale].total} ${totalAmount} ${
            dictionary[locale].items
          } ${totalPrice}$`}
        </div>
      )}
    </LocaleConsumer>
  );
}

export default connect(state => ({
  totalAmount: totalAmountSelector(state),
  totalPrice: totalPriceSelector(state)
}))(Cart);
