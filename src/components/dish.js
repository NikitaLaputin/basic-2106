import React, { useState } from "react";
import { Card, Button } from "antd";
import PropTypes from "prop-types";

function Dish(props) {
  const [value, changeValue] = useAddMenuItem();

  return (
    <Card
      bordered
      actions={[
        `$${props.price}`,
        <>
          <span data-id="value" style={{ margin: "0 12px" }}>
            {value}
          </span>
          <Button.Group>
            <Button
              data-id="decrement"
              type="primary"
              shape="circle"
              icon="minus"
              onClick={changeValue}
            />
            <Button
              data-id="increment"
              type="primary"
              shape="circle"
              icon="plus"
              onClick={changeValue}
            />
          </Button.Group>
        </>
      ]}
    >
      <Card.Meta
        data-id="menu-item"
        title={props.name}
        description={props.ingredients.join(", ")}
      />
    </Card>
  );
}

Dish.defaultProps = {
  name: "Unknown"
};

Dish.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
};

function useAddMenuItem(initialValue = 0) {
  const [state, setState] = useState(initialValue);
  const onClick = e => {
    switch (e.target.dataset.id) {
      case "decrement":
        if (state) setState(state - 1);
        break;
      default:
        setState(state + 1);
        break;
    }
  };

  return [state, onClick];
}

export default Dish;
