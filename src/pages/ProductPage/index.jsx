import React, { Component } from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import detailsProducts from "./../../detailsProducts.js";

class ProductPage extends Component {
  state = {
    products: detailsProducts
  };

  render = () => {
    return (
      <React.Fragment>
        <Header />
        <h1>ProductPage</h1>
        <Footer />
      </React.Fragment>
    );
  };
}

export default ProductPage;
