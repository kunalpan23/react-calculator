import React, { Component } from "react";
import Buttons from "./Buttons";
import update from "immutability-helper";
import Math from "mathjs";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: []
    };
  }

  calculateVal = e => {
    let result = this.state.output.join("");
    result = Math.eval(result);
    result = Math.format(result, { preprecision: 14 });
    result = String(result);
    this.setState({
      output: [result]
    });
  };
  getInput = e => {
    const value = e.target.value;
    switch (value) {
      case "clear":
        this.setState({
          output: []
        });
        break;

      case "equal":
        this.calculateVal();
        break;

      default:
        const newValue = update(this.state.output, {
          $push: [value]
        });
        this.setState(state => (state.output = newValue));
        break;
    }
  };

  render() {
    return (
      <div className="calc-wrap">
        <div>
          <input
            type="text"
            className="calc-wrap__screen"
            value={this.state.output.join("") || 0}
            readOnly
          />
          <Buttons getInput={this.getInput} />
        </div>
      </div>
    );
  }
}
