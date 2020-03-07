import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default hot(Router);
