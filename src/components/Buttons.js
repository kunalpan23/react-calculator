import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className="flex calc-wrap__btn-wrap">
        <div className="row">
          <button
            className="buttons"
            value="clear"
            onClick={this.props.getInput}
          >
            Clear
          </button>
          <button
            className="buttons pink"
            value="-"
            onClick={this.props.getInput}
          >
            -
          </button>
          <button
            className="buttons pink"
            value="/"
            onClick={this.props.getInput}
          >
            /
          </button>
        </div>

        <div className="row">
          <button className="buttons" onClick={this.props.getInput} value="7">
            7
          </button>
          <button className="buttons" onClick={this.props.getInput} value="8">
            8
          </button>
          <button className="buttons" onClick={this.props.getInput} value="9">
            9
          </button>
          <button
            className="buttons pink"
            value="+"
            onClick={this.props.getInput}
          >
            +
          </button>
        </div>

        <div className="row">
          <button className="buttons" onClick={this.props.getInput} value="4">
            4
          </button>
          <button className="buttons" onClick={this.props.getInput} value="5">
            5
          </button>
          <button className="buttons" onClick={this.props.getInput} value="6">
            6
          </button>
          <button
            className="buttons pink"
            onClick={this.props.getInput}
            value="."
          >
            .
          </button>
        </div>

        <div className="row">
          <button className="buttons" onClick={this.props.getInput} value="1">
            1
          </button>
          <button className="buttons" onClick={this.props.getInput} value="2">
            2
          </button>
          <button className="buttons" onClick={this.props.getInput} value="3">
            3
          </button>
          <button
            className="buttons pink"
            value="equal"
            onClick={this.props.getInput}
          >
            =
          </button>
        </div>

        <div className="row">
          <button className="buttons extend" />
          <button className="buttons" onClick={this.props.getInput} value="0">
            0
          </button>
          <button className="buttons extend" />
          <button className="buttons extend" />
        </div>
      </div>
    );
  }
}
