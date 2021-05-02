import React, { Component } from "react";
import "./Prison.css";

class Prison extends Component {
  state = {};

  render() {
    return (
      <div className="start">
        {this.props.user != null
          ? (<div><h1>Witaj na stronie zakładu karnego</h1></div>)
          : (<div><h1>Zaloguj się!</h1></div>)}
      </div>
    );
  }
}

export default Prison;
