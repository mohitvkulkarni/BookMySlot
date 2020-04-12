import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import Searchbar from "../Components/Searchbar";
import PeopleRiskList from "../Components/PeopleRiskList";
import Button from "../Components/Button";

class TrackingBoard extends React.Component {
  state = {
    isColor: {
      extreme: "#f6f6f6",
      high: "",
      moderate: "",
      active: "extreme",
    },
  };

  getList = (type) => {
    switch (type) {
      case "extreme":
        this.setState({
          isColor: {
            extreme: "#f6f6f6",
            high: "",
            moderate: "",
            active: "extreme",
          },
        });
        break;
      case "high":
        this.setState({
          isColor: {
            extreme: "",
            high: "#f6f6f6",
            moderate: "",
            active: "high",
          },
        });
        break;
      case "moderate":
        this.setState({
          isColor: {
            extreme: "",
            high: "",
            moderate: "#f6f6f6",
            active: "moderate",
          },
        });
        break;
      default:
        break;
    }
  };

  componentDidMount() {}

  componentWillUnmount() {}
  render() {
    return (
      <div>
        <Layout>
          <Header name="Tracking Board" headerImage="track" />
          <div
            className="row"
            style={{ padding: 10, justifyContent: "center" }}
          >
            <Searchbar />
          </div>
          <div className="row">
            <div className="col-4 noSpace">
              <button
                className="btnTransaction"
                style={{
                  float: "right",
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  color: "#f6f6f6",
                  backgroundColor: "#333d79",
                  borderColor: this.state.isColor.extreme,
                }}
                type="button"
                onClick={() => this.getList("extreme")}
              >
                Extreme
              </button>
            </div>
            <div className="col-4 noSpace">
              <button
                className="btnTransaction"
                style={{
                  borderRadius: 0,
                  width: "100%",
                  color: "#f6f6f6",
                  backgroundColor: "#5c66a5",
                  borderColor: this.state.isColor.high,
                }}
                type="button"
                onClick={() => this.getList("high")}
              >
                High
              </button>
            </div>
            <div className="col-4 noSpace">
              <button
                className="btnTransaction"
                style={{
                  float: "left",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  color: "#f6f6f6",
                  backgroundColor: "#717fd3e8",
                  borderColor: this.state.isColor.moderate,
                }}
                type="button"
                onClick={() => this.getList("moderate")}
              >
                Moderate
              </button>
            </div>
          </div>
          <div style={{ paddingTop: 20 }}>
            <h4>List of people at risk</h4>
            <div style={{ height: "42vh", overflowY: "auto" }}>
              {this.state.isColor.active === "extreme" ? (
                <div>
                  <PeopleRiskList
                    name={"Ganesh Gaikwad"}
                    address={"Bibwewadi, Pune"}
                    meet={"Wellness forever"}
                    dateTime={"11/04/2020, 9.00 am - 10.00 am"}
                    id={"ABCDEFG"}
                  />
                  <PeopleRiskList
                    name={"Ramesh F"}
                    address={"Bibwewadi, Pune"}
                    meet={"Wellness forever"}
                    dateTime={"11/04/2020, 9.00 am - 10.00 am"}
                    id={"ABCDEFG"}
                  />
                  <PeopleRiskList
                    name={"Suresh S"}
                    address={"Bibwewadi, Pune"}
                    meet={"Wellness forever"}
                    dateTime={"11/04/2020, 9.00 am - 10.00 am"}
                    id={"ABCDEFG"}
                  />
                  <PeopleRiskList
                    name={"Mahesh D"}
                    address={"NIBM, Pune"}
                    meet={"Om Medical"}
                    dateTime={"11/04/2020, 11.00 am - 12.00 am"}
                    id={"A4C5EF7"}
                  />
                  <PeopleRiskList
                    name={"Ram Verma"}
                    address={"NIBM, Pune"}
                    meet={"General Store"}
                    dateTime={"11/04/2020, 2.00 pm - 3.30 pm"}
                    id={"XKSANO"}
                  />
                  <PeopleRiskList
                    name={"Pushkar M"}
                    address={"Satara Rd, Pune"}
                    meet={"D-Mart"}
                    dateTime={"11/04/2020, 9.00 am - 10.00 am"}
                    id={"MCCSMI"}
                  />
                </div>
              ) : this.state.isColor.active === "high" ? (
                <div>
                  <PeopleRiskList
                    name={"Mahesh D"}
                    address={"NIBM, Pune"}
                    meet={"Om Medical"}
                    dateTime={"10/04/2020, 11.00 am - 12.00 am"}
                    id={"A4C5EF7"}
                  />
                  <PeopleRiskList
                    name={"Yash Verma"}
                    address={"NIBM, Pune"}
                    meet={"General Store"}
                    dateTime={"10/04/2020, 2.00 pm - 3.30 pm"}
                    id={"XKSANO"}
                  />
                  <PeopleRiskList
                    name={"Kedar C"}
                    address={"Satara Rd, Pune"}
                    meet={"D-Mart"}
                    dateTime={"09/04/2020, 12.00 am - 1.00 pm"}
                    id={"MCCSMI"}
                  />
                  <PeopleRiskList
                    name={"Mohmad Gaikwad"}
                    address={"Bibwewadi, Pune"}
                    meet={"Wellness forever"}
                    dateTime={"11/04/2020, 10.00 am - 11.00 am"}
                    id={"ABCDEFG"}
                  />
                </div>
              ) : (
                <div>
                  <PeopleRiskList
                    name={"Pooja S"}
                    address={"Bibwewadi, Pune"}
                    meet={"Wellness forever"}
                    dateTime={"08/04/2020, 10.00 pm - 11.00 pm"}
                    id={"AMN213"}
                  />
                  <PeopleRiskList
                    name={"Komal Surana"}
                    address={"Bibwewadi, Pune"}
                    meet={"Wellness forever"}
                    dateTime={"05/04/2020, 7.00 pm - 8.00 pm"}
                    id={"LOKM21"}
                  />
                  <PeopleRiskList
                    name={"Chintan D"}
                    address={"Bibwewadi, Pune"}
                    meet={"Wellness forever"}
                    dateTime={"07/04/2020, 10.00 am - 11.00 am"}
                    id={"90HNGT"}
                  />
                  <PeopleRiskList
                    name={"Tarak Mehta"}
                    address={"Bibwewadi, Pune"}
                    meet={"Wellness forever"}
                    dateTime={"08/04/2020, 11.00 am - 12.00 am"}
                    id={"LKOW12"}
                  />
                </div>
              )}
            </div>
          </div>
          <Button
            label={`Export to Excel`}
            color={"#333d79ff"}
            className="loginButton"
          />
        </Layout>
      </div>
    );
  }
}

export default TrackingBoard;
