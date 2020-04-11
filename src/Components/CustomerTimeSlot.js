import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "../Components/Button";

class CustomerTimeSlot extends Component {
  render() {
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 slotContainerDiv row">
            <div className="col-7">
              <h7 className="slotListHeader">Time: {this.props.slotTime}</h7>
              <br></br>
              <h8 className="slotListValue">
                Slots Available: {this.props.slotAvailability}
              </h8>
            </div>
            <div className="col-5">
              <div className="col-12 centerContent">
                <button
                  type="button"
                  onClick={this.props.onClick ? this.props.onClick : null}
                  style={{
                    backgroundColor: "#5669F0",
                    borderColor: "#5669F0",
                    height: 50,
                    color: "#fff",
                  }}
                  className="btn btn-primary"
                >
                  BOOK SLOT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerTimeSlot;
