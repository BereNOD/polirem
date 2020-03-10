import React from "react";
import Icon from "./Icon";

import "./styles.scss";

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    checked: false
  };

  handleClick() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { name } = this.props;
    return (
      <label className="radio">
        <input
          type="radio"
          name={name}
          checked={this.state.checked}
          onClick={this.handleClick}
        />
        <Icon />
      </label>
    );
  }
}

export default Radio;
