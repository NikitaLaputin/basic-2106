import React from "react";
import { Button, Input } from "antd";
import { useInputValue } from "../custom-hooks/use-input-value";
import { withLocale } from "./wrappers/locale-wrapper";

function OrderForm({ dictionary, locale }) {
  const [name, setName] = useInputValue();
  const [address, setAddress] = useInputValue();
  const [telephone, setTelephone] = useInputValue();

  const handleSubmit = ev => {
    ev.preventDefault();

    console.log("---", name, telephone, address);
  };

  return (
    <form onSubmit={handleSubmit}>
      {dictionary[locale].name}: <Input value={name} onChange={setName} />
      {dictionary[locale].tel}:{" "}
      <Input value={telephone} onChange={setTelephone} />
      {dictionary[locale].address}:{" "}
      <Input.TextArea value={address} onChange={setAddress} />
      <Button type="primary" htmlType="submit">
        {dictionary[locale].order}
      </Button>
    </form>
  );
}

export default withLocale(OrderForm);
