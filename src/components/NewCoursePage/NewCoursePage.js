import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import GoogleMapReact from "google-map-react";

class NewCourse extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_COURSES",
    });
  }
  static defaultProps = {
    center: {
      lat: 39.099789,
      lng: -94.57856,
    },
    zoom: 10,
  };

  homeBack = (event) => {
    // console.log("Clicked");
    this.props.history.push("/user");
  };

  render() {
    return (
      <div>
        <div>
          <h2>Kansas City Golf Courses</h2>
          <h3>Click on Pin to add</h3>
        </div>
        <br />
        <div style={{ height: "60vh", width: "60%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          ></GoogleMapReact>
          <button onClick={this.homeBack}>Go Back</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NewCourse);
