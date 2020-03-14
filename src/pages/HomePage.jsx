import React from "react";

import List from "./../components/List";

class HomePage extends React.Component {
  state = {
    list: []
  };

  handleClick = () => {
    this.setState({
      list: [...this.state.list, this.state.list.length]
    });
  };

  render = () => {
    return (
      <>
        <button onClick={this.handleClick}>Add</button>
        <List title="HomePage" items={[this.state.list.length]} />
      </>
    );
  };
}

export default HomePage;
