import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import { Link } from "react-router-dom";

class BackButton extends React.Component {
  render() {
    return (
      <div className="noSpace">
        <div className="row noSpace">
          <div className="col-12" style={{ textAlign: "left" }}>
            <Link to={this.props.path}>
              <button type="button" className="backButton">
                &larr;
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BackButton;
