import React from "react";
import { LocaleConsumer } from "../../contexts/locale";

export const withLocale = Component => props => (
  <LocaleConsumer>
    {context => <Component {...props} {...context} />}
  </LocaleConsumer>
);
