import React from "react";
import { Select } from "antd";
import { LocaleConsumer } from "./../contexts/locale";
const { Option } = Select;

export default function() {
  return (
    <LocaleConsumer>
      {({ locale, dictionary, localeSeletion }) => (
        <>
          <span style={{ padding: 10 }}>
            {dictionary[locale].selectLanguage}
          </span>
          <Select defaultValue="English" onChange={localeSeletion}>
            <Option value="en_GB">English</Option>
            <Option value="ru_RU">Русский</Option>
          </Select>
        </>
      )}
    </LocaleConsumer>
  );
}
