import React from "react";
import { connect } from "react-redux";
import { Select } from "antd";
import { setMinRating } from "../ac";
import { withLocale } from "./wrappers/locale-wrapper";

function Filter({ minRating, setMinRating, dictionary, locale }) {
  return (
    <Select value={minRating} onChange={setMinRating}>
      <Select.Option value={0}>{dictionary[locale].all}</Select.Option>
      <Select.Option value={1}>1</Select.Option>
      <Select.Option value={2}>2</Select.Option>
      <Select.Option value={3}>3</Select.Option>
      <Select.Option value={4}>4</Select.Option>
      <Select.Option value={5}>5</Select.Option>
    </Select>
  );
}

export default connect(
  state => ({
    minRating: state.filters.get("minRating")
  }),
  { setMinRating }
)(withLocale(Filter));
