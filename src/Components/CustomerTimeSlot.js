import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "../Components/Button";

class CustomerTimeSlot extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-7 slotContainerDiv">
            <h7 className="slotListHeader">Time: {this.props.slotTime}</h7>
            <br></br>
            <h8 className="slotListValue">Slots Available: {this.props.slotAvailability}</h8>
          </div>
          <div className="col-4 slotContainerDiv">
            <Button
              label={`Book Slot`}
              color={"#5669F0"}
              className = "loginButton"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerTimeSlot;
