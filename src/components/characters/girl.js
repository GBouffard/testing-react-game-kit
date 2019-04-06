import React, { Component } from "react";
import { Body, Sprite } from "react-game-kit";
import PropTypes from "prop-types";
import Matter from "matter-js";

const baseUrl = process.env.PUBLIC_URL;

class Girl extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      characterState: 0,
      position: {
        x: 0,
        y: 0
      }
    };
  }

  componentDidMount() {
    Matter.Events.on(this.context.engine, "afterUpdate", this.update);
  }

  componentWillUnmount() {
    Matter.Events.off(this.context.engine, "afterUpdate", this.update);
  }

  update() {
    const { keys } = this.props;
    const { body } = this.body;
    const { x, y } = body.position;

    let characterState = 0;
    this.setState({ position: { x, y } });

    if (keys.isDown(keys.LEFT)) {
      // Matter.Body.setVelocity(body, velocity)
      // A Matter.Vector object is of the form { x: 0, y: 0 }
      Matter.Body.setVelocity(body, { x: -1, y: 0 });
      characterState = 2;
    } else if (keys.isDown(keys.RIGHT)) {
      Matter.Body.setVelocity(body, { x: 1, y: 0 });
      characterState = 3;
    } else if (keys.isDown(keys.UP)) {
      Matter.Body.setVelocity(body, { x: 0, y: -1 });
      characterState = 4;
    } else if (keys.isDown(keys.DOWN)) {
      Matter.Body.setVelocity(body, { x: 0, y: 1 });
      characterState = 1;
    }

    this.setState({ characterState });
  }

  getWrapperStyles(x, y) {
    return {
      position: "absolute",
      transform: `translate(${x}px, ${y}px)`,
      transformOrigin: "left top"
    };
  }

  render() {
    const {
      characterState,
      position: { x, y }
    } = this.state;

    return (
      <div style={this.getWrapperStyles(x, y)}>
        <Body
          args={[0, 0, 64, 50, { inertia: Infinity }]}
          ref={b => {
            this.body = b;
          }}
        >
          <Sprite
            src={`${baseUrl}/assets/girl.png`}
            state={characterState}
            steps={[0, 7, 7, 7, 7]}
            tileHeight={64}
            tileWidth={50}
            offset={[0, 4]}
          />
        </Body>
      </div>
    );
  }
}

Girl.contextTypes = {
  engine: PropTypes.object
};

export default Girl;
