import React from "react";
import "../style/ScoreBoard.css";
import Dice from "./dice";

class ScoreBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      firstDice: "",
      secondDice: "",
      player: [0, 0],
      options:0
    };
    this.scoreValuesCallback = this.scoreValuesCallback.bind(this);
  }

  scoreValuesCallback(diceValu) {
    switch (this.state.options) {
      case 0:
          this.setState(state => {
            state.player.splice(this.state.options, 1, diceValu)
            return {
              player:state.player,
              options: diceValu === 6 ? 0 : 1
            };
          });
        break;
      case 1:
          this.setState(state => {
            state.player.splice(this.state.options, 1, diceValu);
            return {
              player: state.player,
              options: diceValu !== 6 ? 0 : 1
            };
          });
        break;
      default:
        break;
    }
  }
  
  render() {
    return (
      <div className="sb">
        <div className="sb-first" style={{"borderColor": this.state.options === 0 ?"green":"white"}}>
          <h1>{this.state.player[0]}</h1>
        </div>
        <div className="sb-center">
          <Dice scoreValues={this.scoreValuesCallback} />
        </div>
        <div className="sb-scond" style={{"borderColor":this.state.options === 1 ?"green":"white"}}>
          <h1>{this.state.player[1]}</h1>
        </div>
      </div>
    );
  }
}

export default ScoreBoard;
