import React from "react";
import "../style/App.css";
import ScoreBoard from "./scoreBoard.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ScoreBoard />
      </div>
    );
  }
}

export default App;
