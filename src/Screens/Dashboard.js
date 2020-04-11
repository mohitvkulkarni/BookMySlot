import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Button from "../Components/Button";
import WithdrawButton from "../Components/WithdrawButton";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import UserService from "../Services/UserService";
import CompoundService from "../Services/CompoundService";
import EthScanService from "../Services/EthScanService";

class Dashboard extends React.Component {
  state = {
    apy: 5.0,
  };

  componentDidMount() {
    const timerId = setInterval(() => {
      EthScanService.getBalance().then((balance) => {
        UserService.setBalance(balance);
        this.setState({ balance: UserService.getUserAccount() });
      });
    }, 10000);

    CompoundService.getAPY().then((apy) => {
      this.setState({ apy });
    });

    this.setState({ timerId, balance: UserService.getUserAccount() });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }
  render() {
    return (
      <div>
        <Layout>
          <Header />
          <div className="row">
            <div className="col-12" style={{ padding: 30, textAlign: "left" }}>
              <div className="col-12 border-bottom" style={{ padding: 0 }}>
                <div className="col-12" style={{ padding: 0 }}>
                  Hey <span className="title">{UserService.getUserName()}</span>
                </div>
                <div
                  className="col-12"
                  style={{ color: "#7A7A89", padding: 0 }}
                >
                  Today you earned
                </div>
                <div
                  className="col-12"
                  style={{ color: "#333d79ff", padding: 0, marginBottom: 15 }}
                >
                  $0.122325
                </div>
              </div>
              <div className="col-12" style={{ padding: 0 }}>
                <div className="row" style={{ padding: 0, marginTop: 15 }}>
                  <div
                    className="col-6 small-text"
                    style={{ padding: 0, margin: 0 }}
                  >
                    {this.state.apy}% APR
                  </div>
                  <div className="col-6 small-text percentageChange">
                    {/* <span style={{ fontWeight: "bold", color: "#333d79ff" }}>
                    9%
                  </span>{" "}
                  than yesterday */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row card">
            <div className="col-12" style={{ textAlign: "left" }}>
              <div className="col-12 currBal">Current balance</div>
              <div className="col-12 amount">
                <span style={{ color: "#333d79ff" }}>
                  ${UserService.getBalance()}
                </span>
              </div>
              <Link to="/ViewTransactions">
                <div className="col-12 small-text" style={{ color: "#7A7A89" }}>
                  View all transactions
                </div>
              </Link>
            </div>
          </div>
          <div style={{ marginTop: 30 }}>
            <Link to="/DepositVia">
              <Button label={`Deposit`} color={"#333d79ff"} />
            </Link>
            <Link to="/WithdrawTo">
              <WithdrawButton color={"#333d79ff"} />
            </Link>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Dashboard;
