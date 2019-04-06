import React, { Component } from "react";
import { Loop, Stage, World, KeyListener } from "react-game-kit";

import Girl from "./characters/girl";

class Game extends Component {
  constructor() {
    super();
    this.keyListener = new KeyListener();
  }
  componentDidMount() {
    this.keyListener.subscribe([
      this.keyListener.LEFT,
      this.keyListener.RIGHT,
      this.keyListener.UP,
      this.keyListener.DOWN,
      this.keyListener.SPACE
    ]);
  }

  componentWillUnmount() {
    this.keyListener.unsubscribe();
  }

  render() {
    return (
      <Loop>
        <Stage>
          <World
            onInit={this.physicsInit}
            gravity={{
              x: 0,
              y: 0.001,
              scale: 0.01
            }}
          >
            <Girl keys={this.keyListener} />
          </World>
        </Stage>
      </Loop>
    );
  }
}

export default Game;
