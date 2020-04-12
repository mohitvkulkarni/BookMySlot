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
          },
        });
        break;
      case "high":
        this.setState({
          isColor: {
            extreme: "",
            high: "#f6f6f6",
            moderate: "",
          },
        });
        break;
      case "moderate":
        this.setState({
          isColor: {
            extreme: "",
            high: "",
            moderate: "#f6f6f6",
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
                  backgroundColor: "#9c0000",
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
                  backgroundColor: "red",
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
                  backgroundColor: "#f65e5e",
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
              <PeopleRiskList
                name={"Ganesh Gaikwad"}
                address={"Bibwewadi, Pune"}
                meet={"Wellness forever"}
                dateTime={"11/04/2020, 9.00 am - 10.00 am"}
                id={"ABCDEFG"}
              />
              <PeopleRiskList
                name={"Ganesh Gaikwad"}
                address={"Bibwewadi, Pune"}
                meet={"Wellness forever"}
                dateTime={"11/04/2020, 9.00 am - 10.00 am"}
                id={"ABCDEFG"}
              />
              <PeopleRiskList
                name={"Ganesh Gaikwad"}
                address={"Bibwewadi, Pune"}
                meet={"Wellness forever"}
                dateTime={"11/04/2020, 9.00 am - 10.00 am"}
                id={"ABCDEFG"}
              />
              <PeopleRiskList
                name={"Ganesh Gaikwad"}
                address={"Bibwewadi, Pune"}
                meet={"Wellness forever"}
                dateTime={"11/04/2020, 9.00 am - 10.00 am"}
                id={"ABCDEFG"}
              />
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
