import React, { Component } from "react";
import Card from "./Card";
export default class Boleto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <Card
          title="Boleto 1"
          description="Descrição do boleto"
          value={this.state.count}
        />
        <button onClick={this.increment}>Add</button>
      </div>
    );
  }
}
