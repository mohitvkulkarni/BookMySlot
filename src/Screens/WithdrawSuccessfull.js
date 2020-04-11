import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Layout from "../Components/Layout";
import SuccessfullContainer from "../Components/SuccessfullContainer";
import tickWithdraw from "../assets/images/tickWithdraw.png";
import BackButton from "../Components/BackButton";
import Header from "../Components/Header";

class WithdrawSuccessfull extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Layout>
          <BackButton path={"/Withdraw"} />
          <div className="headerPages">
            Withdraw <br /> Successfull
          </div>
          <SuccessfullContainer
            borderColor={"#333d79ff"}
            imgPath={tickWithdraw}
          />
        </Layout>
      </div>
    );
  }
}

export default WithdrawSuccessfull;
