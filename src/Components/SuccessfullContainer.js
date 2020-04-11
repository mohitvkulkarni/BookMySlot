import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import { Link } from "react-router-dom";

class SuccessfullContainer extends React.Component {
  render() {
    return (
      <div>
        <div
          className="row card"
          style={{
            padding: 60,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
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
            <Link to="/CustomerDashboard">
              <button
                type="button"
                style={{ color: "#5669F0" }}
                className="btn btn-link"
              >
                <u>Go to dashboard</u>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SuccessfullContainer;
