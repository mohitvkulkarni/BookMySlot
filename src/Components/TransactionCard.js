import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";

class TransactionCard extends React.Component {
  render() {
    return (
      <div className="col-12 border-bottom transactionCard">
        <div className="row">
          <div className="col-7" style={{ textAlign: "left" }}>
            <span className="transactionHeader">{this.props.header}</span>
            <br />
            <span className="transactionDescp">{this.props.descp}</span>
          </div>
          <div className="col-5" style={{ margin: "auto" }}>
            <span className="transactionValue">{this.props.value}</span>
            <span>
              <img alt="" className="transactionImg" src={this.props.img} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionCard;
