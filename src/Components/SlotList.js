import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class SlotList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 slotContainerDiv">
            <h4 className="slotListHeader">Time: {this.props.slotTime}</h4>
            <h5 className="slotListValue">Slots: {this.props.slotText}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default SlotList;
