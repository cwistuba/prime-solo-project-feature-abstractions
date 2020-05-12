import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import GoogleMapReact from "google-map-react";
import Marker from "google-map-react";

class MapAllCourses extends Component {
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
    const courseList = this.props.store.courses;
    const courseName = courseList.map((item, index) => {
      return (
        <div
          key={index}
          className="marker"
          lat={item.latitude}
          lng={item.longitude}
        >
          {item.name}
        </div>
      );
    });

    return (
      <div>
        <div style={{ height: "60vh", width: "60%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {courseName}
          </GoogleMapReact>
          <button onClick={this.homeBack}>Go Back</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MapAllCourses);
