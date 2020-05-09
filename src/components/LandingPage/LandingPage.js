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

<<<<<<< HEAD
=======
  onRegister = (event) => {
    this.props.history.push("/registration");
  };

>>>>>>> 048555be905b5d3bef98e435afed94b9bdb451c6
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
<<<<<<< HEAD
=======
            <h3>Need to Register?</h3>
            <button className="btn btn_sizeFull" onClick={this.onRegister}>
              Register
            </button>
>>>>>>> 048555be905b5d3bef98e435afed94b9bdb451c6
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
