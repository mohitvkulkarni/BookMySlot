import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class SlotList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-11 slotContainerDiv">
            <h4 className="slotListText">Time: {this.props.slotTime}</h4>
            <h5 className="slotListText">Slots: {this.props.slotText}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default SlotList;
