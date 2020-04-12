import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Layout from "../Components/Layout";
import SuccessfulRegistrationContainer from "../Components/SuccessfulRegistrationContainer";
import tickDeposit from "../assets/images/tickDeposit.png";
import BackButton from "../Components/BackButton";
import Header from "../Components/Header";

class RegistrationSuccessful extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <Header name="Successful!" />
          <br />
          <br />
          <div style={{ padding: 10 }}>
            You can enter credentials at the login screen
          </div>
          <SuccessfulRegistrationContainer
            borderColor={"#35c635"}
            imgPath={tickDeposit}
          />
        </Layout>
      </div>
    );
  }
}

export default RegistrationSuccessful;
