import React from "react";
import PropTypes from "prop-types";
import { Comment, Rate } from "antd";
import { reviewSelector } from "../selectors";
import { authorSelector } from "../selectors";
import { connect } from "react-redux";

function Review({ review, author }) {
  return (
    <Comment
      style={{
        margin: "16px",
        backgroundColor: "white"
      }}
      author={review.author}
      content={review.text}
      actions={[
        <Rate
          disabled
          defaultValue={review.rating}
          style={{ marginLeft: "24px" }}
        />
      ]}
    />
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number
  }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
  review: reviewSelector(state, ownProps)
});

export default connect(mapStateToProps)(Review);
