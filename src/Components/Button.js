import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";

class Button extends React.Component {
  render() {
    return (
      <div className={`${this.props.className}`}>
        <div className="row noSpace">
          <div className="col-12 centerContent">
            <button
              type="button"
              onClick={this.props.onClick ? this.props.onClick : null}
              style={{
                backgroundColor: this.props.color,
                color: this.props.fontColor,
                borderColor: this.props.color,
              }}
              className="btn btn-primary"
            >
              {this.props.label}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Button;
