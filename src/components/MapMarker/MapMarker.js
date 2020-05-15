// import React from "react";
// import { connect } from "react-redux";
// import mapStoreToProps from "../../redux/mapStoreToProps";
// import "./MapMarker.css";

// const MapMarker = (props) => (
//   <div className="marker" onClick={() => console.log("Clicked")}>
//     {props.item.name}
//   </div>
// );

// export default connect(mapStoreToProps)(MapMarker);

// ------------------------------------------------------------------

import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import "./MapMarker.css";

class MapMarker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      courses_list_id: "",
      user_id: "",
    };
  }

  clickMarker = (message) => (event) => {
    this.setState({
      clicked: true,
    });
  };

  handleYes = (id) => (event) => {
    this.setState(
      {
        courses_list_id: id,
        user_id: this.props.store.user.id,
      },
      () => {
        this.props.dispatch({ type: "SEND_ADD", payload: this.state });
      }
    );
    // this.props.history.push("/user");
  };

  render() {
    // let addMessage = <div></div>;
    // if (this.state.clicked === true) {
    //   addMessage = <div className="add-message">Would you like to add?</div>;
    // }

    return (
      <div className="marker" onClick={this.clickMarker("Golf Course")}>
        {this.props.item.name}
        {this.state.clicked ? (
          <div className="add-message">
            <p>Would you like to add?</p>
            <button onClick={this.handleYes(this.props.item.id)}>Yes</button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MapMarker));
