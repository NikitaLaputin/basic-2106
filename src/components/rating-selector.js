import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

export class RatingSelector extends Component {
  render() {
    return (
      <Select defaultValue="1" style={{ width: 80 }}>
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
      </Select>
    );
  }
}

export default RatingSelector;
