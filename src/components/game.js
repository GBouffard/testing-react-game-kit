import React, { Component } from "react";
import { Loop, Stage, World, TileMap, KeyListener } from "react-game-kit";

import Girl from "./characters/girl";

const baseUrl = process.env.PUBLIC_URL;

const arrOne = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0
];

const arrTwo = [
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  1,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0
];

class Game extends Component {
  constructor() {
    super();
    this.keyListener = new KeyListener();
  }

  // react-game-kit/src/utils/key-listener.js
  // seems to only deal with the 5 following keys
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
            <TileMap
              style={{}}
              src={`${baseUrl}/assets/star.png`}
              sourceWidth={32}
              tileSize={32}
              columns={6}
              rows={10}
              layers={[arrOne]}
            />
            <TileMap
              style={{}}
              src={`${baseUrl}/assets/heart.png`}
              sourceWidth={32}
              tileSize={32}
              columns={6}
              rows={10}
              layers={[arrTwo]}
            />
            <Girl keys={this.keyListener} />
          </World>
        </Stage>
      </Loop>
    );
  }
}

export default Game;
