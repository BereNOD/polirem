import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { CartContext } from "./../../Cart";

import Radio from "./../Radio";

import "./styles.scss";

class Product extends React.Component {
  state = {
    activeValue: this.props.data.weights[0]
  };

  handleChange = activeValue => {
    this.setState({ activeValue });
  };

  render() {
    const { data } = this.props;

    return (
      <CartContext.Consumer>
        {({ list, addToCart }) => (
          <div className="card col-xl-4 col-md-4 col-sm-6 col-xs-12 product-item">
            <img
              className="card-img-top"
              src="image/product.png"
              alt="product"
            />
            <div className="card-rating">
              <div>
                <img src={`image/rating-${data.rate}.png`} alt="rating" />
              </div>
              {data.in_stock ? (
                <span>
                  <img src="image/check-icon.png" alt="check" />в наличии
                </span>
              ) : (
                <span>нет в наличии</span>
              )}
            </div>
            <p className="card-text">{data.title}</p>
            <div className="row d-flex justify-content-between weight-product">
              {Array.isArray(data.weights)
                ? _.map(data.weights, weight => (
                    <Radio
                      key={`Radio-${weight}`}
                      value={weight}
                      activeValue={this.state.activeValue}
                      onChange={this.handleChange}
                    >
                      {weight}
                    </Radio>
                  ))
                : null}
            </div>
            <div className=" d-flex justify-content-between price">
              {data.sale ? (
                <div className="discount">
                  <div className="price">
                    <span className="sale_discount">{data.price}</span>
                    <img
                      className="image_sale"
                      src="image/discount_price.svg"
                      alt="sale"
                      width="15"
                      height="15"
                    />
                  </div>
                  <div className="sale_price">
                    <span className="sale">{data.sale}</span>
                    <img
                      className="image_sale"
                      src="image/sale.svg"
                      alt="sale"
                    />
                  </div>
                </div>
              ) : (
                <div class="d-flex align-items-center cost">
                  <span className="price">{data.price}</span>
                  <img
                    className="image_price"
                    src="image/price.svg"
                    alt="sale"
                  />
                </div>
              )}
              <div className="btn-buy">
                <button className="btn" onClick={() => addToCart(data)}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
        )}
      </CartContext.Consumer>
    );
  }
}

export default Product;
