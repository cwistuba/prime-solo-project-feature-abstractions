import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

import "./LandingPage.css";

class LandingPage extends Component {
  state = {
    heading: "Welcome",
  };

  onLogin = (event) => {
    this.props.history.push("/login");
  };

  onRegister = (event) => {
    this.props.history.push("/registration");
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_4">
            <h3>Already a Member?</h3>
            <button className="btn btn_sizeFull" onClick={this.onLogin}>
              Login
            </button>
            <h3>Need to Register?</h3>
            <button className="btn btn_sizeFull" onClick={this.onRegister}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
