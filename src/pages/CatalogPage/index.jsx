import React, { Component } from "react";
import _ from "lodash";
import ListProduct from "./../../components/ListProduct";
import GridProduct from "./../../components/GridProduct";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import mockedData from "./../../CatalogMock.js";

class CatalogPage extends Component {
  state = {
    productList: mockedData,
    ProductView: ListProduct
  };

  handleClick = () => {
    this.setState(({ ProductView }) => ({
      ProductView: ProductView === ListProduct ? GridProduct : ListProduct
    }));
  };

  render = () => {
    const { productList, ProductView } = this.state;

    return (
      <React.Fragment>
        <Header />
        <button onClick={this.handleClick}>toggle</button>
        <div className="container">
          <div className="left"></div>
          <div className="product row">
            {_.map(productList, product => (
              <ProductView key={`Product-${product.id}`} data={product} />
            ))}
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  };
}

export default CatalogPage;
