import React, { Component } from "react";

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery",
    maxBalls: 6,
    maxNum: 40
  };
  state = {
    nums: []
  };
  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
      </section>
    );
  }
}

export default Lottery;
