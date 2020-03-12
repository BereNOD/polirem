import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import ProductPage from "./pages/ProductPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <CatalogPage />
      </Route>
      <Route path="/:id">
        <ProductPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default hot(Router);
