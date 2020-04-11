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
import AdminDashboard from "./Screens/AdminDashboard";
import CustomerDashboard from "./Screens/CustomerDashboard";
import StoreDashboard from "./Screens/StoreDashboard";
import StoreConfigureSlots from "./Screens/StoreConfigureSlots";
import CustomerStoreDetail from "./Screens/CustomerStoreDetail";
import BookingSuccessful from "./Screens/BookingSuccessful";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <IsLoading /> */}
        <Switch>
          <Route exact path="/" component={LoginScreen}></Route>
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

          <Route
            exact
            path="/AdminDashboard"
            component={AdminDashboard}
          ></Route>

          <Route
            exact
            path="/StoreDashboard"
            component={StoreDashboard}
          ></Route>

          <Route
            exact
            path="/CustomerDashboard"
            component={CustomerDashboard}
          ></Route>

          <Route
            exact
            path="/StoreConfigureSlots"
            component={StoreConfigureSlots}
          ></Route>

          <Route
            exact
            path="/CustomerStoreDetail/:id"
            component={CustomerStoreDetail}
          ></Route>

          <Route
            exact
            path="/BookingSuccessful"
            component={BookingSuccessful}
          ></Route>

          <Route
            exact
            path="/SignUpScreen"
            component={SignUpScreen}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
