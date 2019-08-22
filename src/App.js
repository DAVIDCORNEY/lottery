import React from "react";
import "./App.css";
import Lottery from "../src/components/Lottery/Lottery";

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Daily Draw" maxBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
