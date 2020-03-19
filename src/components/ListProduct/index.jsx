import React from "react";
import _ from "lodash";
import { CartContext } from "../../Cart";

import Radio from "./../Radio";
import "./styles.scss";

class ListProduct extends React.Component {
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
                  <p className="card-text col-md-7">{data.title}</p>
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
          // <div className="card col-xl-9 product-item">
          //   <img
          //     className="card-img-top"
          //     src="image/product.png"
          //     alt="product"
          //   />
          //   <div className="card-rating">
          //     <div>
          //       <img src={`image/rating-${data.rate}.png`} alt="rating" />
          //     </div>
          //     {data.in_stock ? (
          //       <span>
          //         <img src="image/check-icon.png" alt="check" />в наличии
          //       </span>
          //     ) : (
          //       <span>нет в наличии</span>
          //     )}
          //   </div>
          //   <p className="card-text">{data.title}</p>
          //   <div className="row d-flex justify-content-between weight-product">
          //     {Array.isArray(data.weights)
          //       ? _.map(data.weights, weight => (
          //           <Radio
          //             key={`Radio-${weight}`}
          //             value={weight}
          //             activeValue={this.state.activeValue}
          //             onChange={this.handleChange}
          //           >
          //             {weight}
          //           </Radio>
          //         ))
          //       : null}
          //   </div>
          //   <div className=" d-flex justify-content-between price">
          //     {data.sale ? (
          //       <div className="discount">
          //         <div className="price">
          //           <span className="sale_discount">{data.price}</span>
          //           <img
          //             className="image_sale"
          //             src="image/discount_price.svg"
          //             alt="sale"
          //             width="15"
          //             height="15"
          //           />
          //         </div>
          //         <div>
          //           <span className="sale">{data.sale}</span>
          //           <img
          //             className="image_sale"
          //             src="image/sale.svg"
          //             alt="sale"
          //           />
          //         </div>
          //       </div>
          //     ) : (
          //       <div class="d-flex align-items-center cost">
          //         <span className="price">{data.price}</span>
          //         <img
          //           className="image_price"
          //           src="image/price.svg"
          //           alt="sale"
          //         />
          //       </div>
          //     )}
          //     <div className="btn-buy">
          //       <button className="btn" onClick={() => addToCart(data)}>
          //         В корзину
          //       </button>
          //     </div>
          //   </div>
          // </div>
        )}
      </CartContext.Consumer>
    );
  }
}

export default ListProduct;
