import React from "react";
import "./App.css";
import LotteryBall from "../src/components/LotteryBall/LotteryBall";
import Lottery from "../src/components/Lottery/Lottery";

function App() {
  return (
    <div className="App">
      <LotteryBall num={10} />
      <LotteryBall num={17} />
      <LotteryBall num={21} />
      <LotteryBall num={36} />
    </div>
  );
}

export default App;
