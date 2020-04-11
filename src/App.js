import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Screens/Login";
import "./App.css";
import Dashboard from "./Screens/Dashboard";
import Deposits from "./Screens/Deposits";
import WithdrawFunds from "./Screens/WithdrawFunds";
import DeopsitsViaScreen from "./Screens/DepositViaScreen";
import WithdrawToScreen from "./Screens/WithdrawToScreen";
import AllTransactions from "./Screens/AllTransactions";
import WithdrawSuccessfull from "./Screens/WithdrawSuccessfull";
import DepositSuccessfull from "./Screens/DepositSuccessfull";
import RegisterConsumer from "./Components/RegisterConsumer";
import RegisterStore from "./Components/RegisterStore";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <IsLoading /> */}
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route
            exact
            path="/RegisterConsumer"
            component={RegisterConsumer}
          ></Route>
          <Route exact path="/RegisterStore" component={RegisterStore}></Route>
          <Route exact path="/Deposit" component={Deposits}></Route>
          <Route exact path="/Withdraw" component={WithdrawFunds}></Route>
          <Route exact path="/Dashboard" component={Dashboard}></Route>
          <Route exact path="/DepositVia" component={DeopsitsViaScreen}></Route>
          <Route
            exact
            path="/WithdrawSuccessfull"
            component={WithdrawSuccessfull}
          ></Route>
          <Route
            exact
            path="/DepositSuccessfull"
            component={DepositSuccessfull}
          ></Route>
          <Route exact path="/WithdrawTo" component={WithdrawToScreen}></Route>
          <Route
            exact
            path="/ViewTransactions"
            component={AllTransactions}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
