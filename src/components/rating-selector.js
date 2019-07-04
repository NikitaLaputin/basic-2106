import React from "react";
import { Select } from "antd";
import { connect } from "react-redux";
import { selectRating } from "../ac";

const { Option } = Select;

function RatingSelector(props) {
  return (
    <>
      <span style={{ margin: "0 20px 0 10px", fontSize: 15 }}>
        Select minimal desirable rating:
      </span>
      <Select
        defaultValue="1"
        style={{ width: 80 }}
        onChange={rating => props.selectRating(rating)}
      >
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
        <Option value="4">4</Option>
        <Option value="5">5</Option>
      </Select>
    </>
  );
}

const mapStateToProps = state => ({
  minRating: state.minRating || 1
});

const mapDispatchProps = {
  selectRating
};

export default connect(
  mapStateToProps,
  mapDispatchProps
)(RatingSelector);
