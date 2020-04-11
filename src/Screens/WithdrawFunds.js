import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import NumberInput from "../Components/NumberInput";
import WithdrawButton from "../Components/WithdrawButton";
import Layout from "../Components/Layout";
import FireBaseService from "../Services/FireBaseService";
import TorusService from "../Services/TorusService";
import WyreService from "../Services/WyreService";
import BackButton from "../Components/BackButton";
import Button from "../Components/Button";
import Header from "../Components/Header";

class WithdrawFunds extends React.Component {
  state = {
    amount: "",
  };

  onInputChange = (input) => {
    this.setState({ amount: input });
  };

  onWithdrawClick = async () => {
    const paymentMethod = await FireBaseService.getPaymentMethod();
    if (paymentMethod) {
      if (!paymentMethod.paymentMethodId) {
        const { id: paymentMethodId } = await WyreService.createPaymentMethod(
          paymentMethod.publicToken
        );

        await FireBaseService.savePaymentMethod(paymentMethodId);
      }

      if (paymentMethod.paymentMethodId && !paymentMethod.accountETH) {
        const {
          blockchains: { ETH: accountETH },
        } = await WyreService.attachBlockchain(paymentMethod.paymentMethodId);
        await FireBaseService.saveAddressETH(accountETH);
      }
      const accountETH = paymentMethod.accountETH;
      TorusService.makeTransaction(accountETH, this.state.amount);
    } else {
      this.initPliad();
    }
  };

  initPliad = () => {
    var handler = new window.WyrePmWidget({
      env: "test",
      onLoad: function () {
        handler.open();
      },
      onSuccess: async ({ publicToken }) => {
        await FireBaseService.savePublicToken(publicToken);
        const { id: paymentMethodId } = await WyreService.createPaymentMethod(
          publicToken
        );
        await FireBaseService.savePaymentMethod(paymentMethodId);
        const {
          blockchains: { ETH: accountETH },
        } = await WyreService.attachBlockchain(paymentMethodId);
        await FireBaseService.saveAddressETH(accountETH);
        TorusService.makeTransaction(accountETH, this.state.amount);
      },
      onExit: (err) => {
        if (err != null) {
          alert("There was an error. Please try again.");
        }
        console.log("Thingo exited:", err);
      },
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Layout>
          <BackButton path={"/WithdrawTo"} />
          <div className="row" style={{ textAlign: "left" }}>
            <div className="headerPages col-12" style={{ margin: 0 }}>
              Withdraw via ACH{" "}
            </div>
            <div className="col-12">
              <span style={{ fontSize: 20 }}>Balance</span>{" "}
              <span style={{ fontSize: 25, color: "#1f1e2f" }}>
                $23.93209232
              </span>
            </div>
          </div>
          <NumberInput onInputChange={this.onInputChange} />
          <WithdrawButton onClick={this.onWithdrawClick} color={"#5669F0"} />
          <Button label={"Withdraw"} fontColor={"#7A7A89"} color={"#E9E8EC"} />
        </Layout>
      </div>
    );
  }
}

export default WithdrawFunds;
