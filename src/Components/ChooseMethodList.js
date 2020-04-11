import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";

class ChooseMethodList extends React.Component {
  render() {
    return (
      <div className="row card" style={{ borderColor: this.props.borderColor }}>
        <div className="col-12">
          <div className="row">
            <div
              className="col-2 typeImage"
              style={{ borderColor: this.props.borderColor }}
            >
              <img alt="" src={this.props.typeImage} />
            </div>
            <div className="col-9 noSpace" style={{ textAlign: "left" }}>
              <div className="col-12 typeName">{this.props.typeName}</div>
              <div className="col-12 typeDescription">
                {this.props.typeDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseMethodList;
