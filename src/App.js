import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home';
import Product from "./Components/Product";
import Reviews from "./Components/Reviews";

export default function OliverTakeHome() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:id">
            <Product />
          </Route>
          <Route exact path="/:id/reviews">
            <Reviews />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}
