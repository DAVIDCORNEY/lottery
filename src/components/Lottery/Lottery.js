import React, { Component } from "react";
import { threadId } from "worker_threads";

class Lottery extends Component {
  static defaultProps = {
    title: "Lottery",
    maxBalls: 6,
    maxNum: 40
  };
  state = {
    nums: Array.from({ length: this.props.maxBalls })
  };

  generate = () => {};

  handleClick = () => {
    this.generate();
  };

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>Balls</div>
        <button onClick={this.handleClick}>Play Lottery</button>
      </section>
    );
  }
}

export default Lottery;
