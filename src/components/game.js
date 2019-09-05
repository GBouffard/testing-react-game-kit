import React, { Component } from "react";
import { Loop, Stage, World, TileMap, KeyListener } from "react-game-kit";
// import Matter from "matter-js";

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

  // physicsInit(engine) {
  //   const world = engine.world;
  //   const ground = Matter.Bodies.rectangle(512, 448, 64, 64, {
  //     isStatic: true,
  //     label: "trap",
  //     density: 0.04,
  //     friction: 1,
  //     frictionAir: 0.00001,
  //     restitution: 0.6,
  //     render: {
  //       fillStyle: "transparent",
  //       strokeStyle: "black",
  //       lineWidth: 2,
  //       sprite: {
  //         texture: "images/base.png"
  //       }
  //     }
  //   });

  //   const rightWall = Matter.Bodies.rectangle(3008, 288, 64, 576, {
  //     isStatic: true
  //   });

  //   World.add(world, [
  //     // walls
  //     Matter.Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
  //     Matter.Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
  //     Matter.Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
  //     Matter.Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
  //   ]);

  //   Matter.World.addBody(engine.world, ground);
  //   Matter.World.addBody(engine.world, rightWall);
  // }
  // physicsInit = engine => {
  //   const ground = Matter.Bodies.rectangle(512, 448, 1024, 64, {
  //     isStatic: false
  //   });

  //   Matter.World.addBody(engine.world, ground);
  // };

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
