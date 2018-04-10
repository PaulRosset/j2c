import React from "react";
import { Button, Icon } from "semantic-ui-react";

function Header(props) {
  return (
    <div className="header">
      {props.error && (
        <div className="boxe" style={{ color: "#db2828" }}>
          Error with the provided JSON, correct it and try again! 👎
        </div>
      )}
      <Button
        inverted
        color="orange"
        onClick={props.clean}
        disabled={props.disabledclean}
      >
        Clean
      </Button>
      <Button
        inverted
        color="green"
        onClick={props.compile}
        disabled={props.disabledcompile}
      >
        Transform
      </Button>
      <a
        style={{ color: "black", position: "absolute", right: 10 }}
        href="https://github.com/PaulRosset/j2c"
      >
        <Icon name="github" size="large" />
      </a>
    </div>
  );
}

export default Header;
