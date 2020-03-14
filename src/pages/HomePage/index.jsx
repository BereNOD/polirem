import React, { Component } from "react";
import _ from "lodash";
import Product from "./../../components/Product";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Recommendations from "./../../components/Recommendations";
import mockedData from "./CatalogMock.js";
import Slider from './../../components/slider';

class HomePage extends Component {
  state = {
    productList: mockedData
  };

  render = () => {
    return (
      <Slider
        min={0}
        max={255}
      />
    );
  };
}

export default HomePage;
