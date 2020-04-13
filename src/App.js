import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import RegisterConsumer from "./Screens/RegisterConsumer";
import RegisterStore from "./Screens/RegisterStore";
import AdminDashboard from "./Screens/AdminDashboard";
import CustomerDashboard from "./Screens/CustomerDashboard";
import StoreDashboard from "./Screens/StoreDashboard";
import StoreConfigureSlots from "./Screens/StoreConfigureSlots";
import CustomerStoreDetail from "./Screens/CustomerStoreDetail";
import BookingSuccessful from "./Screens/BookingSuccessful";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import TrackingBoard from "./Screens/TrackingBoard";
import RegistrationSuccessful from "./Screens/RegistrationSuccessful";
import MyProfileScreen from "./Screens/MyProfileScreen";
import AboutUs from "./Screens/AboutUs";
import SplashScreen from "./Screens/SplashScreen";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <IsLoading /> */}
        <Switch>
          <Route exact path="/" component={SplashScreen}></Route>

          <Route exact path="/Login" component={LoginScreen}></Route>
          <Route
            exact
            path="/RegisterConsumer"
            component={RegisterConsumer}
          ></Route>
          <Route exact path="/RegisterStore" component={RegisterStore}></Route>
          <Route
            exact
            path="/AdminDashboard"
            component={AdminDashboard}
          ></Route>

          <Route exact path="/TrackingBoard" component={TrackingBoard}></Route>

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

          <Route exact path="/SignUpScreen" component={SignUpScreen}></Route>

          <Route
            exact
            path="/RegistrationSuccessful"
            component={RegistrationSuccessful}
          ></Route>
          <Route
            exact
            path="/MyProfileScreen"
            component={MyProfileScreen}
          ></Route>
          <Route exact path="/AboutUs" component={AboutUs}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
