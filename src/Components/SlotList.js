import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import calendar from "../assets/images/calendar.png";

class SlotList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-11 row slotContainerDiv">
            <div className="col-3 centerDiv">
              <img src={calendar} alt="" style={{ height: 40 }} />
            </div>
            <div className="col-9">
              <h4 className="slotListText">Time: {this.props.slotTime}</h4>
              <h5 className="slotListText">Slots: {this.props.slotText}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SlotList;
