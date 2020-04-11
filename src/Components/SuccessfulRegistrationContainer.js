import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import { Link } from "react-router-dom";

class SuccessFulRegistrationContainer extends React.Component {
  render() {
    return (
      <div style={{ padding: 50 }}>
        <div
          className="row card"
          style={{
            padding: 60,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <div
            className="elipse"
            style={{ borderColor: this.props.borderColor }}
          >
            <img alt="" className="imgTick" src={this.props.imgPath} />
          </div>
        </div>
        <div
          className="row card"
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        >
          <div className="col-12 centerContent">
            <Link to="/">
              <button
                type="button"
                style={{ color: "#333d79ff" }}
                className="btn btn-link"
              >
                <u>Head back to Login Screen</u>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SuccessFulRegistrationContainer;
