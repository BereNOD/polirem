import React, { Component } from "react";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import DetailsProduct from "../../components/DetailsProduct";
import detailsProducts from "./../../detailsProducts.js";

import "./styles.scss";

class ProductPage extends Component {
  render = () => {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <DetailsProduct data={detailsProducts} />
        </div>
        <Footer />
      </React.Fragment>
    );
  };
}

export default ProductPage;
