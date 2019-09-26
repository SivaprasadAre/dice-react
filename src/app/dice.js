import React, { Component } from "react";
import "../style/dice.css";

class Dice extends Component {
  constructor(props) {
    super(props);
    this.dickonClick = this.dickonClick.bind(this);
    this.state = {
      colors: [
        { color: "red" },
        { color: "blue" },
        { color: "gold" },
        { color: "green" },
        { color: "fuchsia" },
        { color: "aqua" }
      ],
      opacity: {
        opacity: 0
      },
      styleName: 0
    };
  }
  dickonClick() {
    // var rand = Math.floor(Math.random() * 6);
    var rand = Math.floor(((Date.now()%10)/10) * 6);
    setTimeout(function () {
      this.setState({ styleDisplay: 'block' });
    }.bind(this), 100);
    this.setState({
      styleName: rand,
      styleDisplay:'none'
    });
    this.props.scoreValues(rand+1);
  }


  render() {
    let styleDisplay = this.state.styleDisplay;
    let arr = [
      { transform: "rotateX(-90deg)",display:styleDisplay },
      { transform: "rotateX(90deg)",display:styleDisplay },
      { transform: "rotateY(-90deg)",display:styleDisplay },
      { transform: "rotateY(360deg)",display:styleDisplay },
      { transform: "rotateY(90deg)",display:styleDisplay },
      { transform: "rotateY(180deg)",display:styleDisplay }
    ];
    let styleobj = arr[this.state.styleName]
      ? arr[this.state.styleName]
      : arr[0];
    return (
      <div className="dice-header">
        <h1 style={{ ...this.state.colors[this.state.styleName] }}>
          {this.state.styleName + 1}
        </h1>
        <div id="view">
          <div
            id="dice"
            onClick={this.dickonClick}
            style={styleobj}
          >
            <div className="diceFace" id="front">
              <div className="side right inner"></div>
              <div className="side left">
                <div className="dot dtop dleft"></div>
                <div className="dot dtop dright"></div>
                <div className="dot dbottom dleft"></div>
                <div className="dot dbottom dright"></div>
              </div>
            </div>
            <div className="diceFace" id="right">
              <div className="side top inner"></div>
              <div className="side right">
                <div className="dot dtop dleft"></div>
                <div className="dot center"></div>
                <div className="dot dbottom dright"></div>
              </div>
            </div>
            <div className="diceFace" id="back">
              <div className="side bottom inner"></div>
              <div className="side back">
                <div className="dot dtop dleft"></div>
                <div className="dot dtop dright"></div>
                <div className="dot dbottom dleft"></div>
                <div className="dot dbottom dright"></div>
                <div className="dot center dleft"></div>
                <div className="dot center dright"></div>
              </div>
            </div>
            <div className="diceFace" id="left">
              <div className="side left inner"></div>
              <div className="side bottom">
                <div className="dot center"></div>
                <div className="dot dtop dleft"></div>
                <div className="dot dtop dright"></div>
                <div className="dot dbottom dleft"></div>
                <div className="dot dbottom dright"></div>
              </div>
            </div>
            <div className="diceFace" id="top">
              <div className="side front">
                <div className="dot center"></div>
              </div>
            </div>
            <div className="diceFace" id="bottom">
              <div className="side front inner"></div>
              <div className="side top">
                <div className="dot dtop dleft"></div>
                <div className="dot dbottom dright"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dice;
