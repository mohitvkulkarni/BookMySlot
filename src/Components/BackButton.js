import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import { Link } from "react-router-dom";

class BackButton extends React.Component {
  render() {
    return (
      <div style={{ margin: 10 }}>
        <Link to={this.props.path}>
          <button type="button" className="backButton">
            &larr;
          </button>
        </Link>
      </div>
    );
  }
}

export default BackButton;
