import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

class CustomerTimeSlot extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-11 slotContainerDiv row">
            <div className="col-7">
              <h7 className="slotListHeader">Time: {this.props.slotTime}</h7>
              <br></br>
              <h8 className="slotListValue">
                Slots Available: {this.props.slotAvailability}
              </h8>
            </div>
            <div className="col-5">
              <Link to={"/BookingSuccessful"}>
                <button
                  type="button"
                  style={{
                    backgroundColor: "#414157",
                    borderColor: "#414157",
                    padding: 10,
                    color: "#fff",
                  }}
                  className="btn btn-primary"
                >
                  BOOK SLOT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerTimeSlot;
