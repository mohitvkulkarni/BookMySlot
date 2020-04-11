import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Layout from "../Components/Layout";
import SuccessfullContainer from "../Components/SuccessfullContainer";
import tickDeposit from "../assets/images/tickDeposit.png";
import BackButton from "../Components/BackButton";
import Header from "../Components/Header";

class DepositSuccessfull extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Layout>
          <BackButton path={"/Deposit"} />
          <div className="headerPages">
            Deposit <br /> Successfull
          </div>
          <SuccessfullContainer borderColor={"#35c635"} imgPath={tickDeposit} />
        </Layout>
      </div>
    );
  }
}

export default DepositSuccessfull;
