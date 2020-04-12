import React, { Component } from "react";
import Layout from "../Components/Layout";
import Header from "../Components/Header";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header name="About us" headerImage="user" />
          <div style={{ textAlign: "left", padding: 20 }}>
            <h4 style = {{color: "#333d79ff"}}>Solution</h4>
            <p>
              A slot-based booking system that can make the local public
              aware of the timings of nearby groceries and medical stores and
              help them book slots based on the availability of stock isn
              these stores. The idea is to build a web application in
              which each store will be registered, and a customer could book a
              slot based on his free time and the slot availability, to buy
              his/her essential items from these registered stores. This will
              further help to avoid overcrowding in stores, maintain social
              distancing as only a fixed number of slots would be available at a
              given time. This will also aid the policemen/those who are in
              charge to make sure people are not stepping out of their
              homes for no reason whatsoever. If a person is identified as a
              suspect, the police can also track the people who might have come
              in contact with him by tracking his user history in the stores he visited.
            </p>
            <hr />
            <h4 style = {{color: "#333d79ff"}}>Vision</h4>
            <p>
              Once the situation gets better the stores can still keep taking
              orders and if possible, start a full- fledged delivery service.
              The same platform can be used as a product catalog wherein all
              small businesses can put up their products like a menu card with
              information and images. This way a consumer will be encouraged to
              buy things locally and also will exactly understand where he can
              find the product he needs. Further digitization of small
              businesses will give them a platform to reach more people and
              increase their revenue.
            </p>
            <hr />
            <h4 style = {{color: "#333d79ff"}}>Team</h4>
            <p>
              Rahul - Technically strong and an extremely focused person.
              <br /> Mohit - Creative in fabricating robust and user-friendly
              UI. An application developer by profession and aware of the latest
              technology trends.
              <br />
              Shivam - Technically proficient for developing the full-featured
              software by understanding the time commitments.
              <br />
              Bhavya - His skills are a mix of business, technology, and
              creativity, dynamic in nature. An all- rounder who is good at
              multiple things.
            </p>
          </div>
        </Layout>
      </div>
    );
  }
}

export default AboutUs;
