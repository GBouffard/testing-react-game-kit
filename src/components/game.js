import React, { Component } from "react";
import { Loop, Stage, World } from "react-game-kit";

class Game extends Component {
  render() {
    return (
      <Loop>
        <Stage style={{ background: "#747136" }}>
          <World
            onInit={this.physicsInit}
            gravity={{
              x: 0,
              y: 0.001,
              scale: 0.01
            }}
          />
        </Stage>
      </Loop>
    );
  }
}

export default Game;
