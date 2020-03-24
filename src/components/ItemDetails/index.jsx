import React from "react";
import Radio from "./../Radio";

import "./styles.scss";

class ItemDetails extends React.Component {
  render = () => {
    const { weight } = this.props;
    return (
      <React.Fragment>
        <div className="item col-xl-3">
          <div className="radio">
            <Radio
              key={`Radio-${weight}`}
              value={weight}
              activeValue={this.props.activeValue}
              onChange={this.props.handleChange}
              onClick={this.props.handleClick}
            />
            <span className="weight">{weight.unit}</span>
          </div>
          {weight.sale ? (
            <div className="weight_price sale">{weight.price}р/кг</div>
          ) : (
            <div className="weight_price">{weight.price}р/кг</div>
          )}
        </div>
      </React.Fragment>
    );
  };
}

export default ItemDetails;
