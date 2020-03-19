import React, { Component } from "react";
import _ from "lodash";
import ListProduct from "./../../components/ListProduct";
// import GridProduct from './../../components/GridProduct';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Recommendations from "./../../components/Recommendations";
import mockedData from "./../../CatalogMock.js";
import GridProduct from "../../components/GridProduct";
import Slider from "./../../components/slider";

class HomePage extends Component {
  state = {
    productList: mockedData
  };

  render = () => {
    const { productList } = this.state;
    return (
      <React.Fragment>
        <Header />
        <Recommendations />

        <div className="container">
          <div className="row product">
            {_.map(productList, product => (
              <GridProduct key={`Product-${product.id}`} data={product} />
            ))}
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  };
}

export default HomePage;
