import React from "react";
import _ from "lodash";
import Radio from "./../Radio";

import "./styles.scss";

class DetailsProduct extends React.Component {
  render = () => {
    const { data } = this.props;
    console.log(data);

    return (
      <React.Fragment>
        <div className="product">
          <div className="product_image">
            <img src="image/details_product.jpg" alt="product" height="250" />
          </div>
          <div className="product_info">
            <div className="title"> {data.title} </div>
            <div className="rating">
              <div>
                {data.in_stock ? (
                  <span>
                    <img src="image/check-icon.png" alt="check" />в наличии
                  </span>
                ) : (
                  <span>нет в наличии</span>
                )}
                <div>
                  <span>Срок доставки:</span> {data.delivery_period} дней
                </div>
              </div>
              <div>
                <img src={`image/rating-${data.rate}.png`} alt="rating" />
                <div>({_.size(data.reviews)} отзыва)</div>
              </div>
            </div>
            <div className="price">
              <div className="col-md-2">
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
              </div>
              <div className="count col-md-10">
                <div className="item col-md-3">
                  <div className="radio">
                    <Radio />
                    <span>300гр</span>
                  </div>
                  <div className="weight">450р/кг</div>
                </div>
                <div className="item col-md-3">
                  <div className="radio">
                    <Radio />
                    <span>300гр</span>
                  </div>
                  <div className="weight">450р/кг</div>
                </div>
                <div className="item col-md-3">
                  <div className="radio">
                    <Radio />
                    <span>300гр</span>
                  </div>
                  <div className="weight">450р/кг</div>
                </div>
                <div className="item col-md-3">
                  <div className="radio">
                    <Radio />
                    <span>300гр</span>
                  </div>
                  <div className="weight">450р/кг</div>
                </div>
                <div className="item col-md-3">
                  <div className="radio">
                    <Radio />
                    <span>300гр</span>
                  </div>
                  <div className="weight">450р/кг</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
}

export default DetailsProduct;
