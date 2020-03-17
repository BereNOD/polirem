import React, { Component } from "react";
import _ from "lodash";
import ListProduct from "./../../components/ListProduct";
import GridProduct from "./../../components/GridProduct";
import Accordeon from "./../../components/Accordeon";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import mockedData from "./../../CatalogMock.js";

class CatalogPage extends Component {
  state = {
    productList: mockedData,
    ProductView: ListProduct,
    sort: "ASC"
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
          <aside className="left">
            <Accordeon>
              {[
                {
                  title: "Бренд",
                  content: (
                    <>
                      <br />
                    </>
                  )
                },
                {
                  title: "Цена",
                  content: (
                    <>
                      <br />
                      <br />
                      <br />
                    </>
                  )
                },
                {
                  title: "Вид животного",
                  content: (
                    <>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </>
                  )
                },
                {
                  title: "Возраст животного",
                  content: (
                    <>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </>
                  )
                }
              ]}
            </Accordeon>
          </aside>
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
