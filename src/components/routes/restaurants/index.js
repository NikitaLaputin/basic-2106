import React from "react";
import RestaurantsList from "../../restaurants-list";
import { Route } from "react-router-dom";
import Restaurant from "../../restaurant";
import { withLocale } from "../../wrappers/locale-wrapper";

export default function RestaurantsPage() {
  return (
    <div>
      <RestaurantsList />
      <Route path="/restaurants/:id" children={withLocale(renderRestaurant)} />
    </div>
  );
}

function renderRestaurant({ match, dictionary, locale }) {
  if (!match) return <h1>{dictionary[locale].pleaseSelect}</h1>;

  return <Restaurant id={match.params.id} isOpen />;
}
