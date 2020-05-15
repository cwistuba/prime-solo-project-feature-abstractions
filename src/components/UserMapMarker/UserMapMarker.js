import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import "./UserMapMarker.css";

class UserMapMarker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  clickMarker = (message) => (event) => {
    this.setState({
      clicked: true,
    });
  };

  handleDelete = (event) => {
    this.props.dispatch({
      type: "DELETE_LISTING",
      payload: this.props.match.params.id,
    });
    // this.props.history.push("/user");
  };

  render() {
    let dltMessage = <div></div>;
    if (this.state.clicked === true) {
      dltMessage = <div className="dlt_message">Would you like to delete?</div>;
    }
    return (
      <div className="marker" onClick={this.clickMarker("Golf Course")}>
        {this.props.item.name}
        {this.state.clicked ? (
          <div className="delete-message">
            <p>Would you like to delete?</p>
            <button onClick={this.handleDelete}>Yes</button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(UserMapMarker));

// import React from "react";
// import { connect } from "react-redux";
// import mapStoreToProps from "../../redux/mapStoreToProps";
// import "./UserMapMarker.css";

// const UserMapMarker = (props) => (
//   <div className="user_marker" onClick={() => console.log("Clicked")}>
//     {props.item.name}
//   </div>
// );

// export default connect(mapStoreToProps)(UserMapMarker);
