import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/styles.css";

class CustomerStore extends React.Component {
  render() {
    return (
       <div className="container">
       <div className="row" style={{ justifyContent: "center" }}>
         <div className="col-11 row slotContainerDiv">
           <div className="col-3 centerDiv">
             <img src={this.props.img} alt="" style={{ height: 40 }} />
           </div>
           <div className="col-9">
             <h6 className="slotListText" style={{ fontWeight: 600 }}>
               {this.props.name}
             </h6>
             <h6 className="slotListText"> {this.props.address}</h6>
             <h6 className="slotListText">{this.props.contact}</h6>
           </div>
         </div>
       </div>
     </div>
    );
  }
}

export default CustomerStore;
