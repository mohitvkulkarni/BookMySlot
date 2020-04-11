import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";

class NumberInput extends React.Component {
  state = {
    amount: ""
  };
  onNumberInput = input => {
    let amount = "";
    console.log(input);
    if (input !== "x") {
      amount = this.state.amount + input;
    }
    this.setState({ amount });
    this.props.onInputChange && this.props.onInputChange(amount);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <input
              type="text"
              value={this.state.amount}
              className="textInput"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div
                className="col-3 numberKey"
                onClick={this.onNumberInput.bind(this, 1)}
              >
                1
              </div>
              <div
                className="col-3 numberKey"
                onClick={this.onNumberInput.bind(this, 2)}
              >
                2
              </div>
              <div
                className="col-3 numberKey"
                onClick={this.onNumberInput.bind(this, 3)}
              >
                3
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div
                className="col-3 numberKey"
                onClick={this.onNumberInput.bind(this, 4)}
              >
                4
              </div>
              <div
                className="col-3 numberKey"
                onClick={this.onNumberInput.bind(this, 5)}
              >
                5
              </div>
              <div
                className="col-3 numberKey"
                onClick={this.onNumberInput.bind(this, 6)}
              >
                6
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div
                className="col-3 numberKey"
                onClick={this.onNumberInput.bind(this, 7)}
              >
                7
              </div>
              <div
                className="col-3 numberKey"
                onClick={this.onNumberInput.bind(this, 8)}
              >
                8
              </div>
              <div
                className="col-3 numberKey"
                onClick={this.onNumberInput.bind(this, 9)}
              >
                9
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div
                className="col-3 numberKey"
                onClick={this.onNumberInput.bind(this, ".")}
              >
                .
              </div>
              <div
                className="col-3 numberKey"
                onClick={this.onNumberInput.bind(this, 0)}
              >
                0
              </div>
              <div
                className="col-3 numberKey"
                onClick={this.onNumberInput.bind(this, "x")}
              >
                X
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NumberInput;
