import React, { useState } from "react";
import { Button, Input, Rate } from "antd";
import { useInputValue } from "../custom-hooks/use-input-value";
import { connect } from "react-redux";
import { addReview } from "../ac";
import { withLocale } from "./wrappers/locale-wrapper";

function ReviewForm({ submitReview, dictionary, locale }) {
  const [text, setText] = useInputValue();
  const [rating, setRating] = useState();

  const handleSubmit = ev => {
    ev.preventDefault();
    submitReview({ text, rating });
  };

  return (
    <form onSubmit={handleSubmit}>
      {dictionary[locale].text}: <Input value={text} onChange={setText} />
      <Rate onChange={setRating} value={rating} />
      <Button type="primary" htmlType="submit">
        {dictionary[locale].submit}
      </Button>
    </form>
  );
}

export default connect(
  null,
  (dispatch, { restaurantId }) => ({
    submitReview: review => dispatch(addReview(review, restaurantId))
  })
)(withLocale(ReviewForm));
