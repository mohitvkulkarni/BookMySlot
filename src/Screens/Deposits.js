import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import NumberInput from "../Components/NumberInput";
import Button from "../Components/Button";
import Layout from "../Components/Layout";
import web3Obj from "../utils";
import BackButton from "../Components/BackButton";
import Header from "../Components/Header";

class Deposits extends React.Component {
  state = {
    amount: "",
  };

  onInputChange = (input) => {
    this.setState({ amount: input });
  };

  onDepositClick = () => {
    if (this.state.amount) {
      web3Obj.torus
        .initiateTopup("wyre", {
          selectedCurrency: "USD",
          fiatValue: this.state.amount,
          selectedCryptoCurrency: "DAI",
        })
        .then((data) => {
          if (data) {
            // redirect to home screen
          }
        })
        .catch((err) => {
          alert("Please Try Again");
          console.log(err.message);
        });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Layout>
          <BackButton path={"DepositVia"} />
          <div className="row">
            <div className="headerPages col-12" style={{ margin: 0 }}>
              Deposit <br /> via debit card{" "}
            </div>
          </div>
          <NumberInput onInputChange={this.onInputChange} />
          <Button
            label={`Deposit`}
            onClick={this.onDepositClick}
            color={"#333d79ff"}
          />
        </Layout>
      </div>
    );
  }
}

export default Deposits;
