import React from "react";
import PropTypes from "prop-types";
import { Button, List } from "antd";
import useToggler from "../custom-hooks/use-toggle-open";
import Review from "./review";
import ReviewForm from "./review-form";
import { withLocale } from "./wrappers/locale-wrapper";

function ReviewList({ restaurant, locale, dictionary }) {
  console.log(restaurant);
  const { isOpen, toggleOpen } = useToggler();
  const body = isOpen && (
    <div>
      <List
        dataSource={restaurant.reviews}
        renderItem={reviewId => (
          <List.Item key={reviewId}>
            <Review id={reviewId} />
          </List.Item>
        )}
      />
      <ReviewForm restaurantId={restaurant.id} />
    </div>
  );
  return (
    <div>
      {body}
      <Button onClick={toggleOpen}>
        {isOpen
          ? dictionary[locale].hideReviews
          : dictionary[locale].showReviews}
      </Button>
    </div>
  );
}

ReviewList.propTypes = {
  restaurant: PropTypes.object.isRequired
};

export default withLocale(ReviewList);
