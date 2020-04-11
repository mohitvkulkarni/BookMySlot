import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";

class WithdrawButton extends React.Component {
  render() {
    return (
      <div className="noSpace">
        <div className="row noSpace">
          <div className="col-12 centerContent">
            <button
              type="button"
              onClick={this.props.onClick ? this.props.onClick : null}
              style={{ color: this.props.color }}
              className="btn btn-link"
            >
              <u>Withdraw funds</u>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WithdrawButton;
