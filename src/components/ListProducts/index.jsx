import React from "react";
import _ from "lodash";
import { CartContext } from "../../Cart";
import { Link } from "react-router-dom";

import Radio from "../Radio";
import "./styles.scss";

class ListProducts extends React.Component {
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
          <div className="row no-gutters product_item_list">
            <div className="col-md-2 image_cart">
              <img src="image/product.png" className="card-img" alt="product" />
            </div>
            <div className="col-md-10">
              <div className="card-body">
                <div className="cart_rating">
                  <div>
                    <img src={`image/rating-${data.rate}.png`} alt="rating" />
                  </div>
                  {data.in_stock ? (
                    <span className="stock">
                      <img src="image/check-icon.png" alt="check" />в наличии
                    </span>
                  ) : (
                    <span className="stock">нет в наличии</span>
                  )}
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

                <div className=" d-flex info_product">
                  <Link to="/product">
                    <p className="card-text col-md-7">{data.title}</p>
                  </Link>
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
                    <div class="d-flex align-items-center cost col-md-2">
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
            </div>
          </div>
        )}
      </CartContext.Consumer>
    );
  }
}

export default ListProducts;
