import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import loading from "../assets/images/loading.gif";

class IsLoading extends React.Component {
  render() {
    return (
      <div>
        <div className="loading">
          <img alt="" className="loadingImg" src={loading} />
        </div>
      </div>
    );
  }
}

export default IsLoading;
