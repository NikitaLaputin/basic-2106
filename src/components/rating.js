import React from "react";
import { Rate, List } from "antd";

export default class Rating extends React.Component {
  state = {
    rating: 0
  };

  setRating = rating =>
    this.setState({
      rating
    });

  render() {
    return (
      <List.Item data-id="vote">
        <List.Item.Meta
          title="Rate this restaurant"
          description={<Rate onChange={this.setRating} />}
        />
      </List.Item>
    );
  }
}
