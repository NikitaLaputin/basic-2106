import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import Cart from "./components/cart";
import Filter from "./components/filter";
import RestaurantsPage from "./components/routes/restaurants";
import CheckoutPage from "./components/routes/checkout";
import { Provider } from "./contexts/username";
import { useInputValue } from "./custom-hooks/use-input-value";
import { Input } from "antd";
import Menu, { MenuItem } from "./components/menu";
import LocaleSelector from "./components/language-picker";
import { LocaleProvider } from "./contexts/locale";
import { dictionary } from "./constants/index";

export default function App() {
  const [username, setUserName] = useInputValue("Roma");
  const [locale, setLocale] = useState("en_GB");
  const localeSeletion = locale => {
    setLocale(locale);
  };

  return (
    <LocaleProvider value={{ locale, dictionary, localeSeletion }}>
      <LocaleSelector />
      <Menu>
        <Menu.Item to="/checkout">
          <Cart />
        </Menu.Item>
        <MenuItem to="/restaurants">{dictionary[locale].restaurants}</MenuItem>
        <MenuItem to="/filter" children={dictionary[locale].filter} />
      </Menu>
      <div>
        {`${dictionary[locale].username}`}
        <Input value={username} onChange={setUserName} />
      </div>
      <Provider value={username}>
        <Switch>
          <Redirect from="/" exact to="/restaurants" />
          <Redirect from="/restaurants/" exact strict to="/restaurants" />
          <Route path="/filter" exact component={Filter} />
          <Route path="/checkout" exact component={CheckoutPage} />
          <Route
            path="/restaurants/:id/review"
            render={({ id }) => (
              <h1>{`${dictionary[locale].addReview} ${id}`}</h1>
            )}
          />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route
            path="*"
            render={() => <h1>{dictionary[locale].notFound}</h1>}
          />
        </Switch>
      </Provider>
    </LocaleProvider>
  );
}
