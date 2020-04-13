import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Layout from "../Components/Layout";
import bookingWhite from "../assets/images/bookingWhite.png";

class SplashScreen extends React.Component {
  render() {
    return (
      <div>
        <Layout style={{ backgroundColor: "#333d79ff" }}>
          <div
            className="centerDiv"
            style={{ height: "95vh", flexDirection: "column" }}
          >
            <img src={bookingWhite} style={{ height: 100 }} alt="" />
            <br />
            <h1 style={{ color: "#f6f6f6" }}>BOOKMYSLOT</h1>
          </div>
          <div style={{ color: "#f6f6f6" }}>
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "#b9c0e7",
                cursor: "pointer",
              }}
              onClick={() => this.props.history.push("/Login")}
            >
              Continue
            </span>
          </div>
        </Layout>
      </div>
    );
  }
}

export default SplashScreen;
