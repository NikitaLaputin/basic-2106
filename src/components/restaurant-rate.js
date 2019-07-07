import React, { Component } from "react";
import PropTypes from "prop-types";
import { Rate, Modal, Form, Input } from "antd";
import { getAverageRate } from "../utils";

class RestaurantRate extends Component {
  static propTypes = {
    restaurant: PropTypes.object.isRequired
  };
  state = {
    rate: getAverageRate(this.props.restaurant),
    isVisible: false,
    text: "",
    author: "Default"
  };

  handleComment = e => {
    this.setState({ text: e.target.value });
  };
  handleAuthor = e => {
    this.setState({ author: e.target.value });
  };

  handleOk = () => {
    this.setState({ isVisible: false });
  };

  handleCancel = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <>
        <Rate
          value={this.state.rate}
          onChange={rate => {
            this.setState({ rate });
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
                value={this.state.rate}
                onChange={rate => {
                  this.setState({ rate });
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

export default RestaurantRate;
