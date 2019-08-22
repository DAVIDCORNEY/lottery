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

  generate = () => {
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  };

  handleClick = () => {
    this.generate();
  };

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <LotteryBall num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Play Lottery</button>
      </section>
    );
  }
}

export default Lottery;
