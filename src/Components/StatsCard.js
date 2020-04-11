import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class StatsCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="statsCard">
            <h5 className="statsCardHeader">{this.props.header}</h5>
            <h2 className="statsCardValue">{this.props.value}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsCard;
