import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/styles.css";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import plus from "../assets/images/plus.png";
import TransactionCard from "../Components/TransactionCard";
import Slider from "react-slick";
import BackButton from "../Components/BackButton";
import UserService from "../Services/UserService";
import EthScanService from "../Services/EthScanService";
import { Link } from "react-router-dom";

class AllTransactions extends React.Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    EthScanService.getTransactionList().then((transactions) => {
      this.setState({ transactions });
    });
  }

  sliderContent = () => {
    return [
      <div style={{ textAlign: "left" }}>
        <div className="sliderHeader">Current Balance</div>
        <div>
          <span className="sliderValueBold">$ {UserService.getBalance()}</span>
        </div>
      </div>,
      <div style={{ textAlign: "left" }}>
        <div className="sliderHeader">Lifetime interest earned</div>
        <div>
          <span className="sliderValueBold">$ 23.</span>
          <span className="sliderValue">22032030</span>
        </div>
      </div>,
      <div style={{ textAlign: "left" }}>
        <div className="sliderHeader">Annual percentage rate (APR)</div>
        <div>
          <span className="sliderValueBold">$ 23.</span>
          <span className="sliderValue">22032030</span>
        </div>
      </div>,
    ];
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const arr = this.sliderContent();
    return (
      <div>
        <Header />
        <Layout>
          <BackButton path={"/Dashboard"} />

          <div className="col-12 sliderDiv" style={{ backgroundColor: "#fff" }}>
            <Slider {...settings}>
              {arr.map((item, index) => (
                <div key={index}>{arr[index]}</div>
              ))}
            </Slider>
          </div>
          <div
            className="col-12 border-bottom"
            style={{ backgroundColor: "#fff", padding: 15 }}
          >
            <div className="row">
              <div className="col-6 noSpace">
                <Link to="/DepositVia">
                  <button
                    className="btnTransaction"
                    style={{
                      float: "right",
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                    type="button"
                  >
                    Deposit
                  </button>
                </Link>
              </div>
              <div className="col-6 noSpace">
                <Link to="/WithdrawTo">
                  <button
                    className="btnTransaction"
                    style={{
                      float: "left",
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                    type="button"
                  >
                    Withdraw
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="headerPages">All transactions</div>
          <div style={{ overflow: "auto" }} className="heightTransaction">
            {this.state.transactions.map((trans) => (
              <TransactionCard
                header={"Debit Card"}
                descp={new Date(parseInt(trans.timeStamp)).toDateString()}
                value={`$ ${(trans.value / 10 ** 21).toFixed(2)}`}
                img={plus}
              />
            ))}
          </div>
        </Layout>
      </div>
    );
  }
}

export default AllTransactions;
