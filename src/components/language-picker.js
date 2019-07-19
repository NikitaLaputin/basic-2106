import React from "react";
import { Select } from "antd";
import { useInputValue } from "./../custom-hooks/use-input-value";
import { localeContext } from "./../contexts/locale";
import { useState } from "react";
const { Option } = Select;

export default function() {
  const [locale, setLocale] = useState("en_GB");
  return (
    <Select defaultValue="English" onChange={setLocale}>
      <Option value="en_GB">English</Option>
      <Option value="ru_RU">Русский</Option>
    </Select>
  );
}
