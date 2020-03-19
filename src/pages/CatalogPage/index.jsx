import React, { Component } from "react";
import _ from "lodash";
import ListProduct from "./../../components/ListProduct";
import GridProduct from "./../../components/GridProduct";
import Accordeon from "./../../components/Accordeon";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import mockedData from "./../../CatalogMock.js";
import Slider from "./../../components/slider";

import "./styles.scss";

class CatalogPage extends Component {
  state = {
    productList: mockedData,
    productListCount: [],
    ProductView: ListProduct,
    sort: "ASC"
  };

  handleClickGridView = () => {
    this.setState({ ProductView: GridProduct });
  };

  handleClickListView = () => {
    this.setState({ ProductView: ListProduct });
  };

  handleChangeSort = e => {
    this.setState({ sort: e.target.value });
  };

  handleChangeSortCount = e => {
    const countProduct = +e.target.value;
    var products = [];
    var productList = this.state.productList;
    for (var i = 0; i < countProduct; i++) {
      products.push(productList[i]);
    }

    console.log(productList);

    this.setState({ productListCount: products });
  };

  sort = () => {
    const { sort, productList, productListCount } = this.state;

    switch (sort) {
      case "ASC":
        if (productListCount.length === 0) {
          return productList;
        } else {
          return productListCount;
        }
      case "DESC":
        if (productListCount.length === 0) {
          return productList.reverse();
        } else {
          return productListCount.reverse();
        }
    }
  };

  render = () => {
    const { ProductView } = this.state;
    let productList = this.sort();
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <aside className="left col-md-2">
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
          <div className="product row col-md-10">
            <div class="view_product">
              <div className="sort">
                <select
                  className="select_sort"
                  onChange={this.handleChangeSort}
                >
                  <option value="ASC">Сортировка по умолчанию</option>
                  <option value="DESC">Сортировка по новизне</option>
                </select>
                <select
                  className="select_sort select_sort_count"
                  onChange={this.handleChangeSortCount}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="view">
                <button
                  className="grid_button"
                  onClick={this.handleClickGridView}
                >
                  <img src="image/grid.svg" alt="grid" />
                </button>
                <button
                  className="list_button"
                  onClick={this.handleClickListView}
                >
                  <img src="image/list.svg" alt="list" />
                </button>
              </div>
            </div>
            <div className="product row">
              {_.map(productList, product => (
                <ProductView key={`Product-${product.id}`} data={product} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  };
}

export default CatalogPage;
