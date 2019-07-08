import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate, Modal, Form, Input } from "antd";
import { getAverageRate } from "../utils";
import { connect } from "react-redux";
import { addReview } from "../ac";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };
  state = {
    rating: getAverageRate(this.props.restaurant),
    restaurant: this.props.restaurant.id,
    isVisible: false,
    text: "",
    name: "Default"
  };

  handleComment = e => {
    this.setState({ text: e.target.value });
  };
  handleAuthor = e => {
    this.setState({ name: e.target.value });
  };

  handleOk = () => {
    this.setState({ isVisible: false });
    this.props.submit(this.state);
  };

  handleCancel = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <>
        <Rate
          value={this.state.rating}
          onChange={rating => {
            this.setState({ rating });
            this.setState({ isVisible: true });
          }}
        />
        <Modal
          title="Rate this restaurant"
          visible={this.state.isVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <Form.Item label="Your name">
              <Input placeholder="Name" onChange={this.handleAuthor} />
            </Form.Item>
            <Form.Item label="Leave your comment">
              <Input.TextArea
                placeholder="Comment"
                onChange={this.handleComment}
              />
            </Form.Item>
            <Form.Item label="Rate this restaurant">
              <Rate
                value={this.state.rating}
                onChange={rating => {
                  this.setState({ rating });
                }}
              />
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

RestaurantRate.propTypes = {};

const mapDispatchToProps = { submit: addReview };

export default connect(
  null,
  mapDispatchToProps
)(RestaurantRate);
