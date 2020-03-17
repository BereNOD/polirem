import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import HomePage from "./pages/HomePage/index.jsx";
=======
import CatalogPage from "./pages/CatalogPage";
import HomePage from "./pages/HomePage";
>>>>>>> ListsProduct
import ProductPage from "./pages/ProductPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/:id">
        <ProductPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default hot(Router);
