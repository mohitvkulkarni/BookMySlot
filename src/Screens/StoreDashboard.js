import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

class StoreDashboard extends React.Component {
  state = {
    
  };

  componentDidMount() {
   
  }

  componentWillUnmount() {
    
  }

handleClick = () => {

    

}

  render() {
    return (
      <div>
        <Layout>
          <Header />
        <div>
            <ul>
                <li>Slot 1</li>
                <li>Slot 2</li>
            </ul>
            <div>
             Store Dashboard
             </div>
             <Link to={"/StoreConfigureSlots"}>
             <Button
                  label={`Configure Slots`}
                  color={"#5669F0"}
                  className="loginButton"
                />
            </Link>

        </div>
        </Layout>
      </div>
    );
  }
}

export default StoreDashboard;
