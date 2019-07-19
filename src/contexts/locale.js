import { createContext } from "react";

export const localeContext = createContext({
  locale: "en_GB",
  toggleLocale: () => {}
});
const { Provider, Consumer } = localeContext;

export { Provider as LocaleProvider, Consumer as LocaleConsumer };
