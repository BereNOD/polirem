import React from "react";
import _ from "lodash";

import Radio from "./../components/Radio";

const weights = ["1kg", "500mg", "300mg"];

class HomePage extends React.Component {
  state = {
    activeValue: weights[0]
  };

  handleChange = activeValue => {
    this.setState({ activeValue });
  };

  render = () => {
    return (
      <div>
        {_.map(weights, weight => (
          <Radio
            key={`Radio-${weight}`}
            value={weight}
            activeValue={this.state.activeValue}
            onChange={this.handleChange}
          >
            {weight}
          </Radio>
        ))}
      </div>
    );
  };
}

export default HomePage;
