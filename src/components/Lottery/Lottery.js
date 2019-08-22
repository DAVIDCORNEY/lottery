import React, { Component } from "react";
import LotteryBall from "../LotteryBall/LotteryBall";

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
    const { nums } = this.state;
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {nums.map(num => (
            <LotteryBall num={num} />
          ))}
        </div>
        <button onClick={this.handleClick}>Play Lottery</button>
      </section>
    );
  }
}

export default Lottery;
