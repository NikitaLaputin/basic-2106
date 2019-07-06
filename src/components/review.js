import React from "react";
import PropTypes from "prop-types";
import { Comment, Rate } from "antd";
import { authorSelector, reviewSelector } from "../selectors";
import { connect } from "react-redux";

function Review({ review, author }) {
  console.log(review, author);
  return (
    <Comment
      style={{
        margin: "16px",
        backgroundColor: "white"
      }}
      author={author.name}
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
  review: reviewSelector(state, ownProps.review),
  author: authorSelector(state, ownProps)
});

export default connect(mapStateToProps)(Review);
